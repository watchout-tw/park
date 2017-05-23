<template>
  <div id="app">
    <div class="d-flex justify-content-between">
      <div v-for="channel in DataStore.channels">{{ channel.id }}</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import common from 'common'
common.hello()

export default {
  name: 'app',
  data() {
    return {
      DataStore: common.DataStore
    }
  }
}
</script>

<style lang="scss">

@import '~common/styles/resources';
@import '~common/styles/main';

#app {
}
</style>
