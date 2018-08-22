/**
 * Created by Administrator on 2018/7/26.
 */

import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['@/components/Login'], resolve);
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);
const Hobby = resolve => require(['@/components/Hobby'], resolve);
const Intar = resolve => require(['@/components/Intar'], resolve);
const Photo = resolve => require(['@/components/Photo'], resolve);
const Home = resolve => require(['@/components/Home'], resolve);
const Set = resolve => require(['@/components/Set'], resolve);
const Message = resolve => require(['@/components/Message'], resolve);
const New = resolve => require(['@/components/New'], resolve);
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld',
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hobby',
      name: 'Hobby',
      component: Hobby
    },
    {
      path: '/Intar',
      name: 'Intar',
      component: Intar
    },
    {
      path: '/Photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/New',
      name: 'New',
      component: New
    }

  ]
})
