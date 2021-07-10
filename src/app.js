import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    store.dispatch('getCurrentUser')
  }
}
