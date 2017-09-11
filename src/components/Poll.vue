<template>
<div class="poll" :class="pollClasses">
  <h1 class="small">{{ config.name }}</h1>
  <div class="paragraphs" v-html="markdown(showTally ? thankYou : config.question)"></div>
  <div class="reminder" v-if="!showTally">{{ config.reminder }}</div>
  <div class="poll-loading" v-if="!initialized">載入中，請稍候⋯</div>
  <div class="poll-body" v-else>
    <div class="poll-tally" v-if="showTally"><span class="underline">{{ isClosed ? '最終' : '目前' }}票數</span></div>
    <div class="options d-flex flex-wrap" v-if="initialized">
      <div v-for="option in config.options" :key="option.id" class="option" :class="optionClasses(option.id)" @click="handleSelect(option.id)">
        <div class="image" :style="optionImageStyle(option.id)"></div>
        <div class="select"></div>
        <div class="party-flag" v-if="isPeople"><div class="flag" :style="flagStyle(option.party)"></div></div>
        <div class="name">{{ option.name }}</div>
        <div class="more" v-if="isPeople">
          <div class="zone" v-if="option.zone">{{ option.zone }}</div>
          <div class="district" v-if="option.district">{{ option.district }}</div>
          <div class="neighborhoods" v-if="option.neighborhoods"><span class="neighborhood" v-for="neighborhood in option.neighborhoods" :key="neighborhood">{{ neighborhood }}</span></div>
        </div>
        <div class="tally" v-if="showTally"><div class="value" v-html="optionTally(option.id)"></div></div>
      </div>
    </div>
    <div class="login" v-if="!isAuthenticated">
      <div class="paragraphs center small">
        <p class="note">你必須先成為草民或登入，才能參與這次《找共識》哦。</p>
      </div>
      <button class="park floating" @click="showModalAuth">成為草民或登入</button>
    </div>
    <div class="submit" v-else-if="!showTally">
      <div class="paragraphs center small">
        <p class="note">想清楚再按下按鈕哦，送出後無法更改。</p>
      </div>
      <button class="park floating" @click="castBallot">我決定好了</button>
    </div>
    <div class="share" v-else>
      <div class="buttons">
        <a class="button-wrapper" :href="config.related_event.participation_link" target="_blank"><button class="park floating">我要參加{{ config.related_event.name }}</button></a>
        <a class="button-wrapper" :href="pollShareLink" target="_blank"><button class="park floating">我要分享這次《找共識》</button></a>
      </div>
    </div>
    <div class="description">
      <h2 class="small">關於這次《找共識》</h2>
      <div class="paragraphs" v-html="markdown(config.description)"></div>
    </div>
  </div>
</div>
</template>

<script>
import * as util from 'common/src/lib/util'
import marked from 'marked'
import axios from 'axios'
import * as pollUtil from '@/util/poll'

util.authenticateAxios()

const punct = {
  separator: '、',
  colon: '：'
}
// https://hackernoon.com/7aac18c4431e
const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))

export default {
  props: ['config'],
  data() {
    return {
      lib: {
        parties: []
      },
      initialized: false,
      entity: 'Poll',
      speechTargetID: undefined,
      selectedOptions: [],
      ballotCasted: false,
      tally: []
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    citizenHandle() {
      return localStorage.getItem('watchout-citizen-handle')
    },
    isPeople() {
      return this.config.type === 'people'
    },
    isClosed() {
      return pollUtil.pollStatus(this.config) === 'closed'
    },
    showTally() {
      return this.ballotCasted || this.isClosed
    },
    pollClasses() {
      return {
        'show-tally': this.showTally
      }
    },
    pollShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=https%3A//park.watchout.tw/kangsim/${this.config.slug}`
    },
    maxBallotReached() {
      return this.selectedOptions.length >= this.config.ballots_per_citizen
    },
    thankYou() {
      return (this.isClosed ? '這次《找共識》已結束。' : '') + (this.selectedOptions.length > 0
        ? '感謝你' + (this.isClosed ? '的參與' : '參與這次的沃草《找共識》') + '，你的選擇是' + this.selectedOptions.map(option => `<strong>${option}</strong>`).join(punct.separator) + '。'
        : '')
    }
  },
  watch: {
    isAuthenticated() {
      util.authenticateAxios()
      this.init()
    },
    ballotCasted() {
      this.getTally()
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.selectedOptions = []
      this.ballotCasted = false
      this.tally = []

      this.getTally()

      // get list of party
      axios.get('/c0ngress/parties').then(response => {
        this.lib.parties = response.data.rows
      })

      if(this.isAuthenticated) {
        // get speech target ID for ballot registration
        if(!this.speechTargetID) {
          axios.get(`/park/citizen_speech_targets?source_entity=${this.entity}&source_id=${this.config.id}`).then(response => {
            this.speechTargetID = response.data.rows.pop().id
          }).catch(util.handleThatError)
        }

        // check if citizen has already casted ballot
        axios.get(`/citizen/speeches?target_source_entity=${this.entity}&target_source_id=${this.config.id}`).then(response => {
          let speeches = response.data.rows
          if(speeches.length > 0) {
            this.ballotCasted = true
            this.selectedOptions = speeches.map(speech => speech.content)
          }
          this.initialized = true
        }).catch(util.handleThatError)
      } else {
        this.initialized = true
      }
    },
    showModalAuth() {
      this.$store.dispatch('toggleModalAuth', {
        value: true
      })
    },
    optionClasses(optionID) {
      return {
        selected: this.selectedOptions.indexOf(optionID) > -1
      }
    },
    optionImageStyle(optionID) {
      let url = `https://raw.githubusercontent.com/chihaoyo/get-rep-photos/master/9/${optionID}.jpg`
      return {
        backgroundImage: `url(${url})`
      }
    },
    optionTally(optionID) {
      if(this.tally.length > 0) {
        let match = this.tally.filter(item => item.content === optionID)
        if(match.length > 0) {
          return match.pop().count
        }
      }
      return 0
    },
    getTally() {
      console.log('getTally')
      axios.get(`/park/polls/${this.config.id}`).then(response => {
        this.tally = response.data.tally
      }).catch(util.handleThatError)
    },
    flagStyle(partyAbbreviation) {
      let party = this.lib.parties.filter(party => party.abbreviation === partyAbbreviation).pop()
      return {
        background: (party ? party.color : '#EAEAEA')
      }
    },
    handleSelect(optionID) {
      if(!this.showTally) {
        let index = this.selectedOptions.indexOf(optionID)
        if(index > -1) {
          this.selectedOptions.splice(index, 1)
        } else {
          if(this.maxBallotReached) {
            this.selectedOptions.shift()
          }
          this.selectedOptions.push(optionID)
        }
      }
    },
    castBallot() {
      if(this.selectedOptions.length > 0) {
        if(!this.showTally) {
          let promiseExecutors = this.selectedOptions.map(option => () => {
            let speechObj = {
              citizen_speech_target_id: this.speechTargetID,
              type: 'ballot',
              content: option
            }
            return axios.post('citizen/speeches', speechObj)
          })
          promiseSerial(promiseExecutors)
            .then(responses => {
              this.ballotCasted = true
            })
            .catch(util.handleThatError)
        }
      }
    },
    markdown(str) {
      return marked(str)
    }
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';

.poll {
  max-width: $bp-sm;
  margin: 1rem auto;
  @include bp-sm-down {
    padding: 0 1rem;
  }

  > .reminder {
    $font-size: 0.85rem;
    margin: 1.5rem auto;
    padding: 1rem;
    max-width: $font-size*16 + 2rem;
    font-size: $font-size;
    background: $color-park-light;
  }

  > .poll-body {
    > .poll-tally {
      margin-bottom: 1rem;
      text-align: center;
      color: $color-secondary-text-grey;
      > .underline {
        padding-bottom: 2px;
        border-bottom: 1px $color-secondary-text-grey solid;
      }
    }

    > .options {
      > .option {
        position: relative;
        $option-size: 8rem;
        $option-size-sm: 6rem;
        $option-size-xs: 5rem;

        max-width: $option-size;
        @include bp-sm-down {
          max-width: $option-size-sm;
        }
        @include bp-xs-down {
          max-width: $option-size-xs;
        }
        margin: 0.5rem 0.5rem 1rem;
        cursor: pointer;

        @mixin status-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px $color-park solid;
          @include bp-xs-down {
            top: -0.5rem;
            left: -0.5rem;
          }
        }

        > .image {
          width: $option-size;
          height: $option-size;
          @include bp-sm-down {
            width: $option-size-sm;
            height: $option-size-sm;
          }
          @include bp-xs-down {
            width: $option-size-xs;
            height: $option-size-xs;
          }
          border: 0.3125rem white solid;
          border-radius: 50%;
          background-color: rgba($color-park, 0.25);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        > .select {
          @include status-indicator;
        }
        > .party-flag {
          position: absolute;
          $offset: 1.8rem;
          top: $option-size - $offset;
          right: -0.45rem;
          @include bp-sm-down {
            top: $option-size-sm - $offset;
          }
          @include bp-xs-down {
            top: $option-size-xs - $offset;
          }
        }
        > .name {
          text-align: center;
        }
        > .more {
          text-align: center;
          font-size: 0.75rem;
          > .neighborhoods {
            color: $color-secondary-text-grey;
            > .neighborhood {
              display: inline-block;
              &:not(:last-of-type):after {
                content: '､'
              }
            }
          }
        }
        > .tally {
          @include status-indicator;
          background: $color-park;
          text-align: center;
          font-size: 1.25rem;
          > .value {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      > .option.selected {
        > .image {
          border-color: $color-park;
        }
        > .select {
          background: $color-park;
          &:before {
            @include checkmark(12px, white);
          }
        }
      }
    }
    > .login,
    > .submit,
    > .share {
      text-align: center;
    }
    > .share {
      margin: 0.5rem 0;
    }
    > .description {
      margin: 4rem 0;
    }
  }
}
.poll.show-tally {
  > .poll-body {
    > .options {
      > .option {
        cursor: default;
      }
    }
  }
}
</style>
