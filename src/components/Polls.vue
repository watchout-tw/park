<template>
<div class="polls-wrapper">
  <img class="key-visual" :src="keyVisual" />
  <div class="polls">
    <template v-for="poll in polls">
      <router-link v-if="pollIsActive(poll)" class="poll active" :key="poll.id" :to="pollPath(poll)">
        <h3 class="small">{{ poll.name }}</h3>
        <div v-if="pollIsNew(poll)" class="status new">NEW</div>
      </router-link>
      <div v-else class="poll" :key="poll.id">
        <h3 class="small">{{ poll.name }}</h3>
      </div>
    </template>
  </div>
</div><!-- FIXME: make component similar to musou-vue-webpack/SeriesMenu -->
</template>

<script>
import dataStore from 'common/src/lib/dataStore'
import polls from '@/data/polls' // FIXME: eventually use GET /park/polls

export default {
  metaInfo() {
    let infoObj = {
      title: '沃草→找共識←',
      meta: [
        {
          vmid: 'og-image',
          property: 'og:image',
          content: require('_/finding_consensus.png')
        }
      ]
    }
    return this.$route.path.indexOf('polls') > -1 ? infoObj : {}
  },
  props: ['channel'],
  data() {
    return {
      keyVisual: require('_/finding_consensus.png'),
      polls
    }
  },
  methods: {
    pollPath(poll) {
      return '/kangsim/' + poll.slug
    },
    pollIsNew(poll) {
      return poll.status === 'new'
    },
    pollIsActive(poll) {
      let now = Date.now()
      return now >= poll.start_date.getTime() && now < poll.end_date.getTime()
    }
  },
  beforeMount() {
    this.$emit('update:channel', dataStore.channels.kangsim)
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';

.polls-wrapper {
  // this should be the standard style for container
  max-width: $bp-sm;
  margin: 2rem auto;
  @include bp-sm-down {
    padding: 0 1rem;
  }

  > .key-visual {
    width: 100%;
  }
}
// this should be the standard style for a list of links
.polls {
  margin: 2rem 0;
  > .poll {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    max-width: 16rem;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
    background: rgba($color-nice-grey, 0.25);
    color: $color-nice-grey;
    cursor: default;
    @include shadow-minimum;
    &:hover {
      @include shadow;
    }
    &.active {
      background: rgba($color-park, 0.25);
      color: black;
      cursor: pointer;
    }

    > .status {
      $font-size: 0.75rem;
      $width: 3.6;
      position: absolute;
      top: -$font-size;
      right: -$font-size;
      width: $font-size*$width;
      @include transform(rotate(15deg))

      font-size: $font-size;
      line-height: 1;
      padding: $font-size*($width - 1)/2 0;
      border-radius: $font-size * $width/2;

      background: $color-park;
      color: white;
      text-align: center;
    }
  }
}
</style>
