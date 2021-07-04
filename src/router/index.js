import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/pages/DashboardPage'
import ManageProductPage from '@/pages/ManageProductPage'
import LoginPage from '@/pages/LoginPage'
import config from '@/constant/config'

const page = config.page

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: page.login,
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: page.base,
      name: 'Dashboard',
      component: DashboardPage,
      redirect: page.product
    },
    {
      path: page.product,
      name: 'ManageProduct',
      component: ManageProductPage
    }
  ]
})
