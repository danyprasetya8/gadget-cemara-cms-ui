<template>
  <div class="w-1/4 h-screen bg-indigo-900 text-white p-8 flex flex-col justify-between menu-navigator-container">
    <section>
      <div class="text-gray-300 text-lg mt-5">
        Admin
      </div>
      <div class="uppercase tracking-wider text-2xl mt-3">
        Dany Prasetya Angtoni
      </div>


      <section class="mt-24">
        <div class="flex items-center cursor-pointer mb-14 bg-indigo-300 py-4 px-6 rounded-full">
          <ArchiveIcon class="w-8 mr-5 text-white" />
          <div class="text-xl">
            Manage Product
          </div>
        </div>
        <div class="flex items-center cursor-pointer">
          <ShoppingCartIcon class="w-8 mr-5 text-white" />
          <div class="text-xl">
            Manage Order
          </div>
        </div>
      </section>
    </section>

    <form @submit="doLogout">
      <button
        class=""
        type="submit"
      >
        Logout
      </button>
    </form>
  </div>
</template>

<script src="./js/dashboard-menu-navigator.js" />

<style lang="scss" scoped>
.menu-navigator-container {
  border-top-right-radius: 130px;
}
</style>
