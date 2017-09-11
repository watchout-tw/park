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
      <div class="panel-action"><button class="park soft">{{ ancmActionText }}</button></div>
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
          content: require('_/park-enhanced.png')
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
      keyVisual: require('_/park-enhanced.png'),
      ancmIsShown: true,
      ancmText: '桃園立委給問嗎？《找共識》最終結果出爐。',
      ancmGoRoute: '/kangsim/ask-taoyuan',
      ancmActionText: '看結果'
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
.park {
  > .key-visual {
    width: 100%;
    > img {
      display: block;
      width: 100%;
    }
  }
}
</style>
