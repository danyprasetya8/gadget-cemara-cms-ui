import { useStore } from 'vuex'
import Snackbar from '@/components/Snackbar'

export default {
  name: 'App',
  components: {
    Snackbar
  },
  setup () {
    const store = useStore()
    store.dispatch('getCurrentUser')
  }
}
