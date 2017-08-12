<template>
<div class="everyone">
</div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    }
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
  }
}
</script>
