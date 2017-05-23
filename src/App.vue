<template>
  <div id="app">
    <img src="./assets/logo.png">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
