import Vue from 'vue'
import Router from 'vue-router'
import Everyone from '@/components/Everyone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Everyone',
      component: Everyone
    }
  ]
})
