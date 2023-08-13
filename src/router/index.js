import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import login from '../views/loginPage.vue';
import register from '../views/registerPage.vue';
import compeleteRegister from '../views/compeleteRegister.vue';
import exploreJobs from '@/views/exploreJobs.vue';
import jobDetails from '@/views/jobDetails.vue';
import chatRooms from '@/views/chatRooms.vue';
import singleChat from '@/views/singleChatRoom.vue';
import contactUs from '@/views/contactUs.vue';
import companyProfile from '@/views/companyProfile.vue';
import orders from '@/views/MyOrders.vue'

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
  },
  {
    path : '/chatRooms',
    name : 'chatRooms',
    component : chatRooms
  },
  {
    path : '/singleChat/:id',
    name : 'singleChat',
    component : singleChat
  },
  {
    path : '/contactUs',
    name : 'contactUs',
    component : contactUs
  },
  {
    path : '/companyProfile/:id',
    name : 'companyProfile',
    component : companyProfile
  },
  {
    path : '/orders',
    name : 'orders',
    component : orders
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
