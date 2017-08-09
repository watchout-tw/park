<template>
<div class="poll-wrapper">
  <Poll :config="config"></Poll>
</div>
</template>

<script>
import dataStore from 'common/src/lib/dataStore'
import Poll from 'common/src/components/Poll'
import polls from '@/data/polls' // FIXME: GET /park/polls

export default {
  metaInfo() {
    return {
      title: this.config ? `沃草→${this.config.name}←` : '沃草→民調←'
    }
  },
  props: ['channel'],
  data() {
    return {
      config: undefined
    }
  },
  beforeMount() {
    this.$emit('update:channel', dataStore.channels.poll)
    this.config = polls.filter(poll => poll.slug === this.$route.params.slug).pop()
  },
  components: {
    Poll
  }
}
</script>
