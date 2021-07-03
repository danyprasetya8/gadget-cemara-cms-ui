export default {
  name: 'LoginPage',
  setup () {
    const doLogin = e => {
      e.preventDefault()
      console.log('login')
    }

    return {
      doLogin
    }
  }
}
