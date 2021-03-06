import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Park from '@/components/Park'
import Polls from '@/components/Polls'
import PollingStation from '@/components/PollingStation'

Vue.use(Router)
Vue.use(Meta, {
  tagIDKeyName: 'vmid'
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'park',
      component: Park
    },
    {
      path: '/kangsim',
      name: 'kangsim-list',
      component: Polls
    },
    {
      path: '/kangsim/:slug',
      name: 'kangsim-poll',
      component: PollingStation
    }
  ]
})
