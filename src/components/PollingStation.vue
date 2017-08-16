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
      title: this.config ? `沃草→找共識←${this.config.name}↑` : '沃草→找共識←',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.config ? this.config.question + this.config.description : '沃草找共識'
        },
        {
          vmid: 'og-image',
          property: 'og:image',
          content: this.config ? require(`_/polls/${this.config.slug}.jpg`) : require('_/finding_consensus.png')
        }
      ]
    }
  },
  props: ['channel'],
  data() {
    return {
      config: undefined
    }
  },
  beforeMount() {
    this.$emit('update:channel', dataStore.channels.kangsim)
    this.config = polls.filter(poll => poll.slug === this.$route.params.slug).pop()
  },
  components: {
    Poll
  }
}
</script>
