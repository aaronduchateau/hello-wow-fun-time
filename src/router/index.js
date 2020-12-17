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
import Preamble from '../views/Preamble.vue'
import PompIntro from '../views/PompIntro.vue'
import PompIntroTwo from '../views/PompIntroTwo.vue'
import PompVideo from '../views/PompVideo.vue'
import Grayscale from '../views/Grayscale.vue'
import Regs from '../views/Regs.vue'
import MassMutual from '../views/MassMutual.vue'
import DeFi from '../views/DeFi.vue'
import Donate from '../views/Donate.vue'
import Signal from '../views/Signal.vue'
import WhatToBuy from '../views/WhatToBuy.vue'
import Cash from '../views/Cash.vue'
import Stocks from '../views/Stocks.vue'
import RealEstate from '../views/RealEstate.vue'
import Bonds from '../views/Bonds.vue'
import Gold from '../views/Gold.vue'
import Help from '../views/Help.vue'
import AnthonyTweet from '../views/AnthonyTweet.vue'
import SatoshiTweet from '../views/SatoshiTweet.vue'
import RaulTweet from '../views/RaulTweet.vue'




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
  {
    path: '/preamble',
    name: 'Preamble',
    component: Preamble
  },
  {
    path: '/pomp-intro',
    name: 'PompIntro',
    component: PompIntro
  },
  {
    path: '/pomp-intro-two',
    name: 'PompIntroTwo',
    component: PompIntroTwo
  },
  {
    path: '/pomp-video',
    name: 'PompVideo',
    component: PompVideo
  },
  {
    path: '/grayscale',
    name: 'Grayscale',
    component: Grayscale
  },
  {
    path: '/regs',
    name: 'Regs',
    component: Regs
  },
  {
    path: '/mass-mutual',
    name: 'MassMutual',
    component: MassMutual
  },
  {
    path: '/defi',
    name: 'DeFi',
    component: DeFi
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/signal',
    name: 'Signal',
    component: Signal
  },
  {
    path: '/what-to-buy',
    name: 'WhatToBuy',
    component: WhatToBuy
  },
  {
    path: '/cash',
    name: 'Cash',
    component: Cash
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/real-estate',
    name: 'RealEstate',
    component: RealEstate
  },
  {
    path: '/bonds',
    name: 'bonds',
    component: Bonds
  },
  {
    path: '/gold',
    name: 'gold',
    component: Gold
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/gold',
    name: 'Gold',
    component: Gold
  },

  




  {
    path: '/atweet',
    name: 'Atweet',
    component: AnthonyTweet
  },
  {
    path: '/rtweet',
    name: 'Rtweet',
    component: RaulTweet
  },
  {
    path: '/stweet',
    name: 'Stweet',
    component: SatoshiTweet
  },

  

 
  
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
