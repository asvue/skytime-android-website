import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DMCA from '../views/DMCA.vue'
import DMCASubmit from '../views/DMCASubmit.vue'
import DMCALearn from '../views/DMCALearn.vue'
import UserAgreement from '../views/UserAgreement.vue'
import CreatorLogin from '../views/CreatorLogin.vue'
import Privacy from '../views/Privacy.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dmca',
    name: 'DMCA',
    component: DMCA
  },
  {
    path: '/dmca/learn',
    name: 'DMCALearn',
    component: DMCALearn
  },
  {
    path: '/dmca/submit',
    name: 'DMCASubmit',
    component: DMCASubmit
  },
  {
    path: '/creator/login',
    name: 'CreatorLogin',
    component: CreatorLogin
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/agreement',
    name: 'UserAgreement',
    component: UserAgreement
  }
]

const isProductionHash = import.meta.env.MODE === 'production'

const router = createRouter({
  history: isProductionHash ? createWebHashHistory() : createWebHistory(),
  routes
})

export default router

