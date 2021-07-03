import { ArchiveIcon, ShoppingCartIcon } from '@heroicons/vue/outline'

export default {
  name: 'DashboardMenuNavigator',
  components: {
    ArchiveIcon,
    ShoppingCartIcon
  },
  setup () {
    const doLogout = e => {
      e.preventDefault()
      console.log('logout')
    }

    return {
      doLogout
    }
  }
}
