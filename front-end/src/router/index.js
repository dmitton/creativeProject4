import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Scores from '../views/Scores.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/scores',
    name: 'scores',
    component: Scores
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
