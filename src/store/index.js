import { createStore } from 'vuex'
import commonModule from './modules/common'

export default createStore({
  modules: {
    commonModule
  }
})
