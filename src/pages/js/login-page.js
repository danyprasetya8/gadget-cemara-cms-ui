import { isValidEmail } from '@/utils/validation'
import { ref, computed } from 'vue'
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

  const validForm = computed(() => {
    return isValidEmail(form.value.email) && form.value.password.length
  })

  const doLogin = e => {
    e.preventDefault()
    validForm.value && store.dispatch('login', {
      payload: {
        requestBody: {
          email: form.value.email,
          password: form.value.password
        }
      },
      onSuccess (res) {
        window.localStorage.setItem('token', res.data.token)
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
    const { doLogin, form } = useLogin()
    return {
      form,
      doLogin
    }
  }
}
