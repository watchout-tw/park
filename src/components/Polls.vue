<template>
<div class="polls-wrapper">
  <div class="polls">
    <router-link class="poll" v-for="poll in polls" :key="poll.id" :to="pollPath(poll)">
      <h3 class="small">{{ poll.name }}</h3>
    </router-link>
  </div>
</div><!-- FIXME: make component similar to musou-vue-webpack/SeriesMenu -->
</template>

<script>
import dataStore from 'common/src/lib/dataStore'
import polls from '@/data/polls' // FIXME: eventually use GET /park/polls

export default {
  metaInfo() {
    return {
      title: '沃草→民調←'
    }
  },
  props: ['channel'],
  data() {
    return {
      polls
    }
  },
  methods: {
    pollPath(poll) {
      return '/polls/' + poll.slug
    }
  },
  beforeMount() {
    this.$emit('update:channel', dataStore.channels.poll)
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';

.polls-wrapper {
  // this should be the standard style for container
  max-width: $bp-sm;
  margin: 1rem auto;
  @include bp-sm-down {
    padding: 0 1rem;
  }

  .logotype {
    box-sizing: content-box;
    $border-left-width: 0.75rem;
    border-left: $border-left-width $color-nice-grey solid;
    margin-left: -$border-left-width;
    width: 154px;
  }
}
// this should be the standard style for a list of links
.polls {
  margin: 1rem 0;
  > .poll {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    max-width: 16rem;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
    background: rgba($color-park, 0.25);
    @include shadow-minimum;
    &:hover {
      @include shadow;
    }
  }
}
</style>
