const state = {
  snackbar: {
    visible: false,
    duration: 2000,
    type: 'success',
    message: ''
  }
}

const getters = {
  snackbar (state) {
    return state.snackbar
  }
}

const mutations = {
  successSnackbar (state, message) {
    state.snackbar = {
      ...state.snackbar,
      visible: true,
      message
    }
  },
  generalErrorSnackbar (state) {
    state.snackbar = {
      ...state.snackbar,
      type: 'error',
      visible: true,
      message: 'Something went wrong, please try again'
    }
  },
  errorSnackbar (state, message) {
    state.snackbar = {
      ...state.snackbar,
      type: 'error',
      visible: true,
      message
    }
  },
  clearSnackbar (state) {
    state.snackbar = {
      visible: false,
      duration: 2000,
      type: 'success',
      message: ''
    }
  }
}

export default {
  state,
  getters,
  mutations
}