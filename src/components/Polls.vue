<template>
<div class="polls">
  <router-link class="poll" v-for="poll in polls" :key="poll.id" :to="pollPath(poll)">
    <h3 class="small">{{ poll.name }}</h3>
  </router-link>
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

.polls {
  > .poll {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    max-width: 16rem;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
    background: rgba($color-park, 0.25);
    @include shadow;
  }
}
</style>
