import api from '@/constant/api'
import axios from '@/axios'

const actions = {
  getProductList (_, { payload = {}, onSuccess, onFail } = {}) {
    return axios.get(api.product.base, { params: payload.params })
      .then(res => onSuccess && onSuccess(res))
      .catch(err => onFail && onFail(err))
  },
  addProduct (_, { payload = {}, onSuccess, onFail } = {}) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    return axios.post(api.product.base, payload.form, { headers })
      .then(res => onSuccess && onSuccess(res))
      .catch(err => onFail && onFail(err))
  },
  updateProduct (_, { payload = {}, onSuccess, onFail } = {}) {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    return axios.post(api.product.id(payload.productId), payload.form, { headers })
      .then(res => onSuccess && onSuccess(res))
      .catch(err => onFail && onFail(err))
  },
  deleteProduct (_, { payload = {}, onSuccess, onFail } = {}) {
    return axios.delete(api.product.id(payload.productId))
      .then(res => onSuccess && onSuccess(res))
      .catch(err => onFail && onFail(err))
  }
}

export default {
  actions
}