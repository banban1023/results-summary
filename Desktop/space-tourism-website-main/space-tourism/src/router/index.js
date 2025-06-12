import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/destination',
        name: 'DestinationPage',
        component: () => import('../views/Destination.vue')
      },
      {
        path: '/crew',
        name: 'CrewPage',
        component: () => import('../views/Crew.vue')
      },
      {
        path: '/technology',
        name: 'TechnolotyPage',
        component: () => import('../views/Technology.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
