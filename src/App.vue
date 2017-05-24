<template>
<div id="app">
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
</style>
