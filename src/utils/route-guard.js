import { arrayContainAny } from '@/utils/object'
import config from '@/constant/config'
import store from '@/store'

const path = config.page

export const validateRoute = (to, from, next) => {
  if (store.getters.isGettingUser) {
    setTimeout(() => validateRoute(to, from, next), 50)
    return
  }

  /**
   * currentUser.null === user is not logged in
   */
  const currentUser = store.getters.currentUser

  /**
   * Unauthenticated user trying to access protected route
   */
  if (to.path !== path.login && currentUser.null) {
    next({
      path: path.login,
      query: { redirect: btoa(to.fullPath) }
    })
    return
  }

  /**
   * Unauthorized user trying to access protected route with certain roles
   */
  if (to.meta.roles && to.meta.roles.length && !currentUser.null && !arrayContainAny(to.meta.roles, currentUser.roles)) {
    next({ name: 'NotFound' })
    return
  }

  /**
   * Authenticated and authorized user trying to access black listed page 
   */
  if (!currentUser.null && config.authUserBlackListedPage.includes(to.path)) {
    next({ path: path.base })
    return
  }

  next()
}
