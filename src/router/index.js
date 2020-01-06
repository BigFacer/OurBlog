import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/ManageModule/Login/Login'
import Admin from '@/views/ManageModule/AdminModules/index'
import Articles from '@/views/ManageModule/AdminModules/child/publishArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // redirect: 'Articles',
      children: [
        {
          path: 'Articles',
          name: 'Articles',
          component: Articles
        }
      ]
    }
  ]
})
