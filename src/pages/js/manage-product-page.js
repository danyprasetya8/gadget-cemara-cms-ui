import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { SearchIcon } from '@heroicons/vue/outline'
import { PencilIcon, TrashIcon } from '@heroicons/vue/solid'
import { numberFormatter } from '@/utils/formatter'
import AddProductModal from '@/components/AddProductModal'
import DashboardMenuNavigator from '@/components/DashboardMenuNavigator'
import DeleteProductModal from '@/components/DeleteProductModal'
import Pagination from '@/components/Pagination'
import debounce from '@/utils/debouncer'
import productImagePlaceholder from '@/assets/images/product-placeholder.jpg'
import useModal from '@/composable/modal'

let currentPage = ref(1)
let products = ref([])
let keyword = ref('')
let pagination = ref({})

const getProducts = store => {
  store.dispatch('getProductList', {
    payload: {
      params: {
        keyword: keyword.value,
        page: currentPage.value,
        size: 5
      }
    },
    onSuccess (res) {
      products.value = res.data.data
      pagination.value = res.data.paging
    }
  })
}

const useDeleteProduct = store => {
  const tempDeleteProduct = ref({})

  const {
    visible: visibleDeleteProductModal,
    toggle: toggleDeleteProductModal
  } = useModal()


  const deleteProduct = product => {
    tempDeleteProduct.value = { ...product }
    toggleDeleteProductModal(true)
  }

  const clear = () => {
    tempDeleteProduct.value = {}
    toggleDeleteProductModal(false)
    getProducts(store)
  }

  const doDeleteProduct = () => {
    store.dispatch('deleteProduct', {
      payload: { productId: tempDeleteProduct.value.sku },
      onSuccess: clear,
      onFail: () => {
        store.commit('generalErrorSnackbar')
        clear()
      }
    })
  }
  
  return {
    tempDeleteProduct,
    deleteProduct,
    doDeleteProduct,
    visibleDeleteProductModal,
    toggleDeleteProductModal
  }
}

const useEditProduct = () => {
  const tempEditProduct = ref({})

  const {
    visible: visibleEditProductModal,
    toggle: toggleEditProductModal
  } = useModal()

  const setTempEditProduct = product => {
    tempEditProduct.value = product
    toggleEditProductModal(true)
  }

  return {
    tempEditProduct,
    visibleEditProductModal,
    toggleEditProductModal,
    setTempEditProduct
  }
}

export default {
  name: 'Manage Product Page',
  components: {
    AddProductModal,
    DashboardMenuNavigator,
    DeleteProductModal,
    Pagination,
    PencilIcon,
    SearchIcon,
    TrashIcon
  },
  setup () {
    const store = useStore()

    watch(currentPage, () => {
      getProducts(store)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    watch(keyword, () => debounce(() => getProducts(store), 200, 'product-list'))

    const handleProductImageError = e => {
      e.target.src = productImagePlaceholder
    }

    const {
      visible: visibleAddProductModal,
      toggle: toggleAddProductModal
    } = useModal()

    const successProduct = toggler => {
      toggler(false)
      getProducts(store)
    }

    onMounted(() => getProducts(store))

    return {
      currentPage,
      pagination,
      keyword,
      products,
      handleProductImageError,
      numberFormatter,
      visibleAddProductModal,
      toggleAddProductModal,
      successProduct,
      ...useDeleteProduct(store),
      ...useEditProduct()
    }
  }
}
