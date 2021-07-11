import { createStore } from 'vuex'
import userModule from './modules/user'
import productModule from './modules/product'
import snackbarModule from './modules/snackbar'

export default createStore({
  modules: {
    userModule,
    productModule,
    snackbarModule
  }
})
