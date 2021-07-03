const axios = require('axios')

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(req => {
  const token = window.localStorage.getItem('token')
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

module.exports = axiosInstance
