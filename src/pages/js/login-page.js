import { isValidEmail } from '@/utils/validation'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import config from '@/constant/config'

const path = config.page

const useLogin = () => {
  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  const form = ref({
    email: 'danyprasetya8@gmail.com',
    password: 'secretpassword'
  })

  const doLogin = e => {
    e.preventDefault()

    if (!isValidEmail(form.value.email) || !form.value.password.length) {
      store.commit('errorSnackbar', 'Fill email / password correctly')
      return
    }

    store.dispatch('login', {
      payload: {
        requestBody: {
          email: form.value.email,
          password: form.value.password
        }
      },
      onSuccess: loginOnSuccess,
      onFail () {
        store.commit('errorSnackbar', 'Wrong credential')
      }
    })
  }

  const loginOnSuccess = res => {
    window.localStorage.setItem('token', res.data.data.token)
    store.dispatch('getCurrentUser', {
      onSuccess () {
        if (route.query.redirect) {
          const parsed = atob(route.query.redirect)
          router.push(parsed)
          return
        }
        router.push(path.base)
      }
    })
  }

  return {
    form,
    doLogin
  }
}

export default {
  name: 'LoginPage',
  setup () {
    return {
      ...useLogin(),
    }
  }
}
