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
    if(this.$route.query.hasOwnProperty('login')) {
      if(!this.isAuthenticated) {
        this.$store.dispatch('toggleModalAuth', {
          value: true
        })
      } else {
        alert('歡迎回到沃草共有地')
      }
    }
  }
}
</script>
