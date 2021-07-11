export default {
  page: {
    base: '/',
    login: '/login',
    product: '/product'
  },
  authUserBlackListedPage: [
    '/login'
  ],
  role: {
    ADMIN: 'ROLE_ADMIN',
    SUPER_ADMIN: 'ROLE_SUPER_ADMIN'
  },
  api: {
    headers: {
      multiPartFile: {
        'Content-Type': 'multipart/form-data'
      }
    }
  }
}
