<template>
  <div>
    <div
      class="h-screen w-screen bg-black bg-opacity-20 fixed top-0 left-0"
      @click="$emit('close')"
    />

    <div class="w-1/3 px-8 py-6 bg-white rounded-lg fixed top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
      <div class="text-indigo-900 text-2xl font-bold mb-3">
        Delete product
      </div>

      <div>
        Are you sure to delete {{ product.name }}?
      </div>

      <div class="mt-6 float-right">
        <button
          class="border border-indigo-900 bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-200 hover:bg-opacity-10 transition duration-200 mr-4"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          class="border border-indigo-900 bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition duration-200"
          @click="$emit('delete', product.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteProductModal',
  props: {
    product: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>

</style>