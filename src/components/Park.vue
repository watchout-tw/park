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
    if(this.hasRequest('login')) {
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
    } else if(this.hasRequest('reset-password')) {
      this.$store.dispatch('toggleModalResetPwd', {
        value: true
      })
    }
  },
  methods: {
    hasRequest(key) {
      return this.$route.query.hasOwnProperty(key)
    }
  },
  components: {
    Polls
  }
}
</script>
