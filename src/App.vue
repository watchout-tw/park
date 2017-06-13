<template>
<div id="app">
  <router-view></router-view>
  <modal-auth></modal-auth>
</div>
</template>

<script>
import dataStore from 'common/src/lib/dataStore'

export default {
  name: 'app',
  data() {
    return {
      dataStore
    }
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';
@import '~common/src/styles/main';
</style>
