<template>
<div class="park">
  <div class="key-visual"><img :src="keyVisual" /></div>
  <polls></polls>
  <div v-if="ancmIsShown" class="ancm-wrapper panel-wrapper-center">
    <div class="ancm panel bg-park-light-opaque" @click.stop="goAncm">
      <div class="panel-heading contain-underline-text"><span>沃草共有地公告</span></div>
      <div class="marquee">
        <div class="content">{{ ancmText }}</div>
      </div>
      <div class="panel-action"><button class="park soft">我要投票</button></div>
      <div class="close" @click.self.stop="ancmIsShown = false"></div>
    </div>
  </div>
</div>
</template>

<script>
import * as util from 'common/src/lib/util'
import dataStore from 'common/src/lib/dataStore'
import Polls from '@/components/Polls'

export default {
  metaInfo() {
    return {
      title: '沃草→中央公園←',
      meta: [
        {
          vmid: 'og-image',
          property: 'og:image',
          content: require('_/park.png')
        }
      ]
    }
  },
  props: ['channel'],
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    }
  },
  data() {
    return {
      keyVisual: require('_/park.png'),
      ancmIsShown: true,
      ancmText: '桃園立委給問嗎？票選活動現正進行中。',
      ancmGoRoute: '/kangsim/ask-taoyuan'
    }
  },
  beforeMount() {
    this.$emit('update:channel', dataStore.channels.park)
  },
  mounted() {
    if(this.hasQueryParameter('login')) {
      if(!this.isAuthenticated) {
        this.$store.dispatch('toggleModalAuthActiveCard', {
          value: 'login'
        })
        this.$store.dispatch('toggleModalAuth', {
          value: true
        })
      } else {
        util.sysAlert('park_welcome_back')
      }
    } else if(this.hasQueryParameter('reset-password')) {
      // FIXME: logout should be a common function?
      this.$store.dispatch('toggleIsAuthenticated', {
        value: false
      })
      localStorage.clear()

      // set token & show reset password modal
      if(this.hasQueryParameter('token')) {
        localStorage.setItem('watchout-password-reset-token', this.$route.query.token)
        this.$store.dispatch('toggleModalResetPwd', {
          value: true
        })
      } else {
        util.sysAlert('park_auth_token_not_found')
      }
    }
  },
  methods: {
    hasQueryParameter(key) {
      return this.$route.query.hasOwnProperty(key)
    },
    goAncm() {
      this.$router.push(this.ancmGoRoute)
    }
  },
  components: {
    Polls
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';

// FIXME: move to common when ready
@keyframes marquee {
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100%)
  }
}
.marquee {
  position: relative;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;

  > .content {
    position: absolute;
    display: block;
    width: auto;
    padding-left: 100%;
    white-space: nowrap;
    overflow: visible;
    animation: marquee 8s linear infinite;
  }
}

.panel {
  position: relative;
  max-width: 16rem;
  margin: 0 1rem 1rem 0;
  padding: 1rem;
  cursor: pointer;
  @include shadow-minimum;
  &:hover {
    @include shadow;
  }

  > .panel-heading {
    @include font-serif;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  > .panel-action {
    margin-top: 1rem;
    text-align: center;
  }
}
.panel-wrapper-center {
  > .panel {
    margin-left: auto;
    margin-right: auto;
  }
}

.contain-underline-text {
  > span {
    padding-bottom: 2px;
    border-bottom: 2px black solid;
  }
}

// This stays here
.park {
  > .ancm-wrapper {
    position: absolute;
    top: $navbar-height;
    left: 0;
    margin-top: 1rem;
    width: 100%;
    z-index: $z-fixed;
  }
  > .key-visual {
    width: 100%;
    > img {
      display: block;
      width: 100%;
    }
  }
}
</style>
