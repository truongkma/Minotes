import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import CreateNote from '@/components/Notes/CreateNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/note',
      name: 'note',
      component: CreateNote
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
