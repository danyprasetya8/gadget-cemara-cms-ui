<template>
  <div class="flex">
    <DashboardMenuNavigator />
    <section class="py-10 px-12 w-3/4">
      <div class="flex justify-between mb-12">
        <div class="text-5xl font-bold text-indigo-900">
          Manage Product
        </div>

        <div class="flex">
          <button
            class="px-6 py-1 text-white bg-indigo-900 rounded hover:bg-indigo-800 transition duration-300 each-in-out"
          >
            Add product
          </button>

          <div class="flex border border-gray-300 px-3 py-1 ml-6 rounded">
            <SearchIcon class="w-6 text-gray-300" />
            <input
              v-model="keyword"
              type="text"
              class="focus:outline-none ml-2"
            >
          </div>
        </div>
      </div>

      <table class="manage-product-table border border-collapse border-gray-300 w-full">
        <thead class="text-gray-400 text-left border border-b-gray-300">
          <th></th>
          <th>Image</th>
          <th>Sku</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in products"
            :key="product.sku"
            class="border border-b-gray-300"
          >
            <td>{{ index + 1 }}</td>
            <td>
              <img
                :src="product.image"
                class="w-32"
                @error="handleProductImageError"
              >
            </td>
            <td>{{ product.sku }}</td>
            <td>{{ product.name }}</td>
            <td>{{ numberFormatter(product.price, 'Rp.') }}</td>
            <td>{{ numberFormatter(product.stock) }}</td>
            <td width="20%">
              <div class="line-clamp-2">
                {{ product.description }}
              </div>
            </td>
            <td>
              <PencilIcon class="w-6 cursor-pointer text-indigo-900 hover:text-indigo-800 transition duration-200 each-in-out" />
            </td>
            <td>
              <TrashIcon
                class="w-6 cursor-pointer text-indigo-900 hover:text-indigo-800 transition duration-200 each-in-out"
                @click="deleteProduct(product)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination
        v-if="pagination.page"
        :totalPage="pagination.totalPages"
        v-model:currentPage="currentPage"
        class="mt-6 float-right"
      />

      <DeleteProductModal
        v-if="visibleDeleteProductModal"
        :visible="visibleDeleteProductModal"
        :product="tempDeleteProduct"
        @close="toggleDeleteProductModal(false)"
        @delete="doDeleteProduct"
      />
    </section>
  </div>
</template>

<script src="./js/manage-product-page.js" />

<style lang="scss" scoped>
.manage-product-table {
  th,
  td {
    @apply p-4;
  }
}
</style>
