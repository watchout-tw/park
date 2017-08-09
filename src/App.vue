<template>
<div id="app">
  <NavigationWithIdentity :channel="channel"></NavigationWithIdentity>
  <router-view></router-view>
  <ModalAuth v-if="modalAuthIsShown"></ModalAuth>
  <ModalIdentity v-if="modalIdentityIsShown"></ModalIdentity>
  <FooterStandard></FooterStandard>
  <SupportWatchoutStandard v-if="supportIsShown" :support-is-shown.sync="supportIsShown" :support-package-key="supportPackageKey"></SupportWatchoutStandard>
</div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import dataStore from 'common/src/lib/dataStore'
import NavigationWithIdentity from 'common/src/components/Navigation/Identity'
import ModalAuth from 'common/src/components/Modal/Auth'
import ModalIdentity from 'common/src/components/Modal/Identity'
import FooterStandard from 'common/src/components/Footer/Standard'
import SupportWatchoutStandard from 'common/src/components/SupportWatchout/Standard'
import * as util from 'common/src/lib/util'

Vue.use(Vuex)

export default {
  name: 'app',
  components: {
    NavigationWithIdentity,
    ModalAuth,
    ModalIdentity,
    FooterStandard,
    SupportWatchoutStandard
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    modalAuthIsShown() {
      return this.$store.state.modalAuthIsShown
    },
    modalIdentityIsShown() {
      return this.$store.state.modalIdentityIsShown
    }
  },
  data() {
    return {
      channel: dataStore.channels.park,
      supportIsShown: true,
      supportPackageKey: 'ask'
    }
  },
  beforeMount() {
    this.$store.dispatch('toggleIsAuthenticated', {
      value: util.jwtTokenIsHere()
    })
  }
}
</script>

<style lang="scss">
@import '~common/src/styles/resources';
@import '~common/src/styles/main';
</style>
