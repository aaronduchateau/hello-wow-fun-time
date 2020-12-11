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
import CoreConcepts from '../views/CoreConcepts.vue'
import RaulIntro from '../views/RaulIntro.vue'
import RaulVideo from '../views/RaulVideo.vue'
import Mainstream from '../views/Mainstream.vue'
import Bullish from '../views/Bullish.vue'
import StepOne from '../views/StepOne.vue'
import StepTwo from '../views/StepTwo.vue'
import StepThree from '../views/StepThree.vue'

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
  {
    path: '/core-concepts',
    name: 'CoreConcepts',
    component: CoreConcepts
  },
  {
    path: '/raul-intro',
    name: 'RaulIntro',
    component: RaulIntro
  },
  {
    path: '/raul-video',
    name: 'RaulVideo',
    component: RaulVideo
  },
  {
    path: '/mainstream',
    name: 'mainstream',
    component: Mainstream
  },

  {
    path: '/bullish',
    name: 'Bullish',
    component: Bullish
  },
  {
    path: '/step-one',
    name: 'StepOne',
    component: StepOne
  },
  {
    path: '/step-two',
    name: 'StepTwo',
    component: StepTwo
  },
  {
    path: '/step-three',
    name: 'StepThree',
    component: StepThree
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
