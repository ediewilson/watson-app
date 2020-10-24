import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})