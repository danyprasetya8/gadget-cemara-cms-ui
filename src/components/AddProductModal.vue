<template>
  <div>
    <div
      class="h-screen w-screen bg-black bg-opacity-20 fixed top-0 left-0"
      @click="$emit('close')"
    />

    <div class="w-1/2 px-8 py-6 bg-white rounded-lg fixed top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
      <div class="text-indigo-900 text-2xl font-bold mb-6">
        <template v-if="isEditMode">
          Edit product
        </template>
        <template v-else>
          Add product
        </template>
      </div>

      <form @submit="addProduct">
        <div>Name</div>
        <input
          v-model="name"
          type="text"
          class="focus:outline-none my-5 border border-gray-200 px-3 py-2 rounded w-full"
        >

        <div>Image</div>
        <div class="flex items-center">
          <label
            for="imageInput"
            class="flex my-5 mr-2 px-6 py-2 text-white bg-indigo-900 rounded hover:bg-indigo-800 transition duration-300 each-in-out cursor-pointer"
          >
            <UploadIcon class="w-6 mr-2" />
            Upload
          </label>
          <div>{{ imageFileName }}</div>
        </div>
        <input
          id="imageInput"
          type="file"
          accept=".jpg,.jpeg,.png"
          @change="handleImageUpload"
        >

        <div>Price</div>
        <input
          v-model="price"
          type="text"
          class="focus:outline-none my-5 border border-gray-200 px-3 py-2 rounded w-full"
          @keypress="numberInput"
        >

        <div>Stock</div>
        <input
          v-model="stock"
          type="text"
          class="focus:outline-none my-5 border border-gray-200 px-3 py-2 rounded w-full"
          @keypress="numberInput"
        >

        <div>Description</div>
        <textarea
          v-model="description"
          class="focus:outline-none my-5 border border-gray-200 px-3 py-2 rounded w-full"
        />

        <div class="mt-6 float-right">
          <button
            class="border border-indigo-900 bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-200 hover:bg-opacity-10 transition duration-200 mr-4"
            @click="$emit('close')"
          >
            Cancel
          </button>
          <button
            class="border border-indigo-900 bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition duration-200"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./js/add-product-modal.js" />

<style lang="scss" scoped>
input[type=file] {
  display: none;
}
</style>
