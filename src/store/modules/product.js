import api from '@/constant/api'
import axios from '@/axios'
import config from '@/constant/config'

const apiHeaders = config.api.headers

const actions = {
  getProductList (_, { payload = {}, onSuccess, onFail } = {}) {
    return axios.get(api.product.base, { params: payload.params })
      .then(res => onSuccess && onSuccess(res))
      .catch(err => onFail && onFail(err))
  },
  addProduct (_, { payload = {}, onSuccess, onFail } = {}) {
    return axios.post(api.product.base, payload.form, { headers: apiHeaders.multiPartFile })
      .then(res => onSuccess && onSuccess(res))
      .catch(err => onFail && onFail(err))
  },
  updateProduct (_, { payload = {}, onSuccess, onFail } = {}) {
    return axios.put(api.product.id(payload.productId), payload.form, { headers: apiHeaders.multiPartFile })
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