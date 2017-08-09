<template>
<div class="polls-wrapper">
  <h1 class="small">沃草民調</h1>
  <div class="polls">
    <router-link class="poll" v-for="poll in polls" :key="poll.id" :to="pollPath(poll)">
      <h3 class="small">{{ poll.name }}</h3>
    </router-link>
  </div>
</div><!-- FIXME: make component similar to musou-vue-webpack/SeriesMenu -->
</template>

<script>
import polls from '@/data/polls' // FIXME: GET /park/polls

export default {
  data() {
    return {
      polls
    }
  },
  methods: {
    pollPath(poll) {
      return '/polls/' + poll.slug
    }
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
