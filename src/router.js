import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Signup from '@/components/Signup.vue'
import As from '@/components/As.vue'
import Login from '@/components/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (firebase.auth().currentUser)
        next()
      else
        next({ name: 'login' })
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    beforeEnter: (to, from, next) => {
      if (firebase.auth().currentUser)
        next({ name: 'home' })
      else
        next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (firebase.auth().currentUser)
        next({ name: 'home' })
      else
        next()
    }
  },
  {
    path: '/as',
    name: 'as',
    component: As,
    beforeEnter: (to, from, next) => {
      if (firebase.auth().currentUser)
        next({ name: 'home' })
      else
        next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
