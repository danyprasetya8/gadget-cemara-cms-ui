export default {
  user: {
    base: '/api/user',
    login: '/api/login'
  },
  product: {
    base: '/api/product',
    id (productId) {
      return `${this.base}/${productId}`
    }
  }
}
