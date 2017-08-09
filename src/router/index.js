import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Everyone from '@/components/Everyone'
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
      name: 'everyone',
      component: Everyone
    },
    {
      path: '/polls',
      name: 'polls',
      component: Polls
    },
    {
      path: '/polls/:slug',
      name: 'poll',
      component: PollingStation
    }
  ]
})
