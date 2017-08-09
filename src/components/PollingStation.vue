<template>
<div class="poll-wrapper">
  <Poll :is-authenticated.sync="isAuthenticated" :modal-auth-is-shown.sync="modalAuthIsShown" :config="config"></Poll>
</div>
</template>

<script>
import Poll from 'common/src/components/Poll'
import polls from '@/data/polls' // FIXME: GET /park/polls

export default {
  props: ['isAuthenticated', 'modalAuthIsShown'],
  data() {
    return {
      config: undefined
    }
  },
  beforeMount() {
    this.config = polls.filter(poll => poll.slug === this.$route.params.slug).pop()
  },
  mounted() {
    this.$el.addEventListener('update:modalAuthIsShown', function(aa, bb, cc) {
      console.log(aa, bb, cc)
    })
  },
  components: {
    Poll
  }
}
</script>
