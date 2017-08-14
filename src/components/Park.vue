<template>
<div class="park">
  <polls></polls>
</div>
</template>

<script>
import dataStore from 'common/src/lib/dataStore'
import Polls from '@/components/Polls'

export default {
  props: ['channel'],
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
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
        alert('歡迎回到沃草共有地')
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
        alert('你的token呢？')
      }
    }
  },
  methods: {
    hasQueryParameter(key) {
      return this.$route.query.hasOwnProperty(key)
    }
  },
  components: {
    Polls
  }
}
</script>
