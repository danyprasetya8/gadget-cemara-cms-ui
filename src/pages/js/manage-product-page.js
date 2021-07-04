import { ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/outline'
import { PencilIcon, TrashIcon } from '@heroicons/vue/solid'
import DashboardMenuNavigator from '@/components/DashboardMenuNavigator'
import DeleteProductModal from '@/components/DeleteProductModal'
import Pagination from '@/components/Pagination'
import useModal from '@/composable/modal'

const useDeleteProduct = () => {
  const tempDeleteProduct = ref({})

  const {
    visible: visibleDeleteProductModal,
    toggle: toggleDeleteProductModal
  } = useModal()
  

  const deleteProduct = product => {
    tempDeleteProduct.value = {
      id: product.id,
      name: product.name
    }
    toggleDeleteProductModal(true)
  }

  const doDeleteProduct = () => {
    console.log('deleting product')
    tempDeleteProduct.value = {}
    toggleDeleteProductModal(false)
  }
  
  return {
    tempDeleteProduct,
    deleteProduct,
    doDeleteProduct,
    visibleDeleteProductModal,
    toggleDeleteProductModal
  }
}

export default {
  name: 'Manage Product Page',
  components: {
    DashboardMenuNavigator,
    DeleteProductModal,
    Pagination,
    PencilIcon,
    SearchIcon,
    TrashIcon
  },
  setup () {
    const currentPage = ref(5)

    return {
      currentPage,
      ...useDeleteProduct()
    }
  }
}
