<template>
  <div class="flex items-center">
    <ChevronLeftIcon
      :class="{
        'w-6 cursor-pointer transition duration-200 each-in-out': true,
        'text-gray-400': currentPage === 1
      }"
      @click="previousPage"
    />

    <button
      v-if="currentPage !== 1"
      class="number"
      @click="$emit('update:currentPage', 1)"
    >
      1
    </button>

    <div
      v-if="currentPage - 1 > 1"
      class="number"
    >
      ...
    </div>

    <button
      v-if="currentPage - 1 > 1"
      class="number"
      @click="$emit('update:currentPage', currentPage - 1)"
    >
      {{ currentPage - 1 }}
    </button>

    <button class="number active">
      {{ currentPage }}
    </button>

    <button
      v-if="currentPage + 1 < totalPage"
      class="number"
      @click="$emit('update:currentPage', currentPage + 1)"
    >
      {{ currentPage + 1 }}
    </button>

    <div
      v-if="currentPage + 1 < totalPage"
      class="number"
    >
      ...
    </div>

    <button
      v-if="currentPage !== totalPage"
      class="number"
      @click="$emit('update:currentPage', totalPage)"
    >
      {{ totalPage }}
    </button>

    <ChevronRightIcon
      :class="{
        'w-6 cursor-pointer transition duration-200 each-in-out': true,
        'text-gray-400': currentPage === totalPage
      }"
      @click="nextPage"
    />
  </div>
</template>

<script src="./js/pagination.js"/>

<style lang="scss" scoped>
.number {
  @apply text-center px-3 py-1 mx-1 cursor-pointer font-bold;
}

.active {
  @apply bg-indigo-300 rounded-full text-white;
}
</style>
