import { createRouter, createWebHistory } from 'vue-router'
import { validateRoute } from '@/utils/route-guard'
import DashboardPage from '@/pages/DashboardPage'
import ManageProductPage from '@/pages/ManageProductPage'
import NotFoundPage from '@/pages/NotFoundPage'
import LoginPage from '@/pages/LoginPage'
import config from '@/constant/config'

const { ADMIN, SUPER_ADMIN } = config.role
const page = config.page

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: page.login,
      name: 'LoginPage',
      component: LoginPage,
      meta: {
        roles: []
      }
    },
    {
      path: page.base,
      name: 'Dashboard',
      component: DashboardPage,
      redirect: page.product,
      meta: {
        roles: [ADMIN, SUPER_ADMIN]
      }
    },
    {
      path: page.product,
      name: 'ManageProduct',
      component: ManageProductPage,
      meta: {
        roles: [ADMIN, SUPER_ADMIN]
      }
    },
    {
      path: '/:notFound(.*)*',
      abstract: true,
      name: 'NotFound',
      component: NotFoundPage,
      meta: {
        roles: []
      }
    }
  ]
})

router.beforeEach(validateRoute)

export default router
