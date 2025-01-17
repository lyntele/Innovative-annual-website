import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News"
import Gallery from "../views/Gallery"
import Organizer from "../views/Organizer"
import Login from '@/views/Login.vue'
import Arrangment from '@/views/Arrangment.vue'
import Itemlist from '@/views/ItemList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
},
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/Organizer',
    name: 'Organizer',
    component: Organizer
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Arrangment',
    name: 'Arrangment',
    component: Arrangment
  },
  {
    path: '/itemlist',
    name: 'Itemlist',
    component: Itemlist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
