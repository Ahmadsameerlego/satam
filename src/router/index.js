import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import login from '../views/loginPage.vue';
import register from '../views/registerPage.vue';
import compeleteRegister from '../views/compeleteRegister.vue';
import exploreJobs from '@/views/exploreJobs.vue';
import jobDetails from '@/views/jobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path : '/login',
    name : 'login',
    component : login
  },

  {
    path : '/register',
    name : 'register',
    component : register
  },
  {
    path : '/compeleteRegister',
    name : 'compeleteRegister',
    component : compeleteRegister
  },
  {
    path : '/exploreJobs',
    name : 'exploreJobs',
    component : exploreJobs
  },
  {
    path : '/jobDetails/:id',
    name : 'jobDetails',
    component : jobDetails
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
