import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { numberInput } from '@/utils/number-input'
import { UploadIcon } from '@heroicons/vue/outline'

export default {
  name: 'AddProductModal',
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    UploadIcon
  },
  setup (props, { emit }) {
    const store = useStore()
    const isEditMode = computed(() => !!Object.entries(props.product).length)

    let imageFileName = ref('')
    let name = ref('')
    let image = ref(null)
    let price = ref('')
    let stock = ref('')
    let description = ref('')

    const addProduct = e => {
      e.preventDefault()

      const form = new FormData()
      form.append('name', name.value)
      form.append('image', image.value)
      form.append('price', price.value)
      form.append('stock', stock.value)
      form.append('description', description.value)

      const ACTIONS = isEditMode.value ? 'updateProduct' : 'addProduct'
      const payload = {
        form,
        ...(isEditMode.value && { productId: props.product.sku })
      }

      store.dispatch(ACTIONS, {
        payload,
        onSuccess () {
          emit('success')
        }
      })
    }

    const handleImageUpload = e => {
      const [file = null] = e.target.files
      if (!file) return

      image.value = file
      imageFileName.value = file.name
    }

    const populateForm = () => {
      name.value = props.product.name
      price.value = props.product.price
      stock.value = props.product.stock
      description.value = props.product.description
    }

    onMounted(() => {
      if (isEditMode.value) {
        populateForm()
      }
    })

    return {
      name,
      image,
      imageFileName,
      price,
      stock,
      description,
      addProduct,
      handleImageUpload,
      numberInput,
      isEditMode
    }
  }
}
