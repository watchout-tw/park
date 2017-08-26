<template>
<div id="app">
  <NavigationWithIdentity :channel="channel"></NavigationWithIdentity>
  <router-view :channel.sync="channel"></router-view>
  <ModalAuth v-if="modalAuthIsShown"></ModalAuth>
  <ModalLostPwd v-if="modalLostPwdIsShown"></ModalLostPwd>
  <ModalResetPwd v-if="modalResetPwdIsShown"></ModalResetPwd>
  <ModalIdentity v-if="modalIdentityIsShown"></ModalIdentity>
  <ModalTermsOfSvc v-if="modalTermsOfSvcIsShown"></ModalTermsOfSvc>
  <FooterStandard></FooterStandard>
  <SupportWatchoutStandard v-if="supportIsShown" :support-is-shown.sync="supportIsShown" :support-package-key="supportPackageKey"></SupportWatchoutStandard>
</div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import dataStore from 'common/src/lib/dataStore'
import NavigationWithIdentity from 'common/src/components/Navigation/Identity'
import ModalAuth from 'common/src/components/Modal/Auth'
import ModalLostPwd from 'common/src/components/Modal/LostPwd'
import ModalResetPwd from 'common/src/components/Modal/ResetPwd'
import ModalIdentity from 'common/src/components/Modal/Identity'
import ModalTermsOfSvc from 'common/src/components/Modal/TermsOfSvc'
import FooterStandard from 'common/src/components/Footer/Standard'
import SupportWatchoutStandard from 'common/src/components/SupportWatchout/Standard'
import * as util from 'common/src/lib/util'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://c0re.watchout.tw'

export default {
  name: 'app',
  components: {
    NavigationWithIdentity,
    ModalAuth,
    ModalLostPwd,
    ModalResetPwd,
    ModalIdentity,
    ModalTermsOfSvc,
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
    modalLostPwdIsShown() {
      return this.$store.state.modalLostPwdIsShown
    },
    modalResetPwdIsShown() {
      return this.$store.state.modalResetPwdIsShown
    },
    modalIdentityIsShown() {
      return this.$store.state.modalIdentityIsShown
    },
    modalTermsOfSvcIsShown() {
      return this.$store.state.modalTermsOfSvcIsShown
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
