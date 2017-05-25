// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from 'common'
import NavigationWithIdentity from 'common/components/Navigation/Identity'
import FooterStandard from 'common/components/Footer/Standard'
global.$ = window.jQuery = window.$ = require('jquery')
global.Tether = require('tether')
global.Bootstrap = require('bootstrap')

Vue.config.productionTip = false

var currentChannel = common.DataStore.channels.park

/* eslint-disable no-new */
new Vue({
  el: '#navigation',
  data() {
    return {
      channel: currentChannel
    }
  },
  template: '<NavigationWithIdentity/>',
  components: { NavigationWithIdentity }
})

Vue.component('modal-auth', require('common/components/Modal/Auth'))
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#footer',
  template: '<FooterStandard/>',
  components: { FooterStandard }
})
