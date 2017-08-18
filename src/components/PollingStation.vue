<template>
<div class="poll-wrapper">
  <Poll :config="config"></Poll>
  <div class="what-is-kangsim">
    <h2 class="small">什麼是沃草《找共識》？</h2>
    <div class="paragraphs" v-html="markdown(whatIsKangsim)"></div>
  </div>
</div>
</template>

<script>
import dataStore from 'common/src/lib/dataStore'
import Poll from 'common/src/components/Poll'
import polls from '@/data/polls' // FIXME: GET /park/polls
import marked from 'marked'

export default {
  metaInfo() {
    return {
      title: this.config ? `沃草→找共識←${this.config.name}↑` : '沃草→找共識←',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.config ? this.config.question : this.whatIsKangsim
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
      config: undefined,
      whatIsKangsim: '投票表達你的意見，是一種公民參與，也是尋找共識的起點。'
    }
  },
  beforeMount() {
    this.$emit('update:channel', dataStore.channels.kangsim)
    this.config = polls.filter(poll => poll.slug === this.$route.params.slug).pop()
  },
  methods: {
    markdown(str) {
      return marked(str)
    }
  },
  components: {
    Poll
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';

.poll-wrapper {
  > .what-is-kangsim {
    max-width: $bp-sm;
    margin: 0 auto;
  }
}
</style>
