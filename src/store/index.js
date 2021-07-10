import { createStore } from 'vuex'
import userModule from './modules/user'
import productModule from './modules/product'

export default createStore({
  modules: {
    userModule,
    productModule
  }
})
