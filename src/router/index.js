import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resources from '../views/Resources.vue'
import ResourcesThru from '../views/ResourcesThru.vue'
import TestArea from '../views/TestArea.vue'
import Satoshi2 from '../views/Satoshi2.vue'
import JackDorsey from '../views/JackDorsey.vue'
import JackDorseyTwo from '../views/JackDorseyTwo.vue'
import DanShulman from '../views/DanShulman.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/test-area',
    name: 'TestArea',
    component: TestArea
  },
  {
    path: '/power-quote',
    name: 'PowerQuote',
    component: Satoshi2
  },
  {
    path: '/resources-main',
    name: 'ResourcesThru',
    component: ResourcesThru
  },
  {
    path: '/jack-dorsey',
    name: 'JackDorsey',
    component: JackDorsey
  },
  {
    path: '/jack-dorsey-2',
    name: 'JackDorseyTwo',
    component: JackDorseyTwo
  },
  {
    path: '/dan-schulman',
    name: 'DanShulman',
    component: DanShulman
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
