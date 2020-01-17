import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/ManageModule/Login/Login'
import Admin from '@/views/ManageModule/AdminModules/index'
import Articles from '@/views/ManageModule/AdminModules/child/publishArticles'
import GuestBook from '@/views/ManageModule/AdminModules/child/guestBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      // redirect: 'Articles',
      redirect: '/Admin/Articles',
      children: [
        {
          path: 'Articles',
          name: 'Articles',
          component: Articles
        },
        {
          path: 'GuestBook',
          name: 'GuestBook',
          component: GuestBook
        }
      ]
    }
  ]
})
