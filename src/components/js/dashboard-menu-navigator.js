import { ArchiveIcon, ShoppingCartIcon } from '@heroicons/vue/outline'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import config from '@/constant/config'

const path = config.page

export default {
  name: 'DashboardMenuNavigator',
  components: {
    ArchiveIcon,
    ShoppingCartIcon
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    const doLogout = e => {
      e.preventDefault()
      window.localStorage.removeItem('token')
      store.commit('clearCurrentUser')
      router.push(path.login)
    }

    return {
      doLogout
    }
  }
}
