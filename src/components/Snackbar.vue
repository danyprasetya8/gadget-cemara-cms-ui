<template>
  <div
    v-if="snackbar.visible"
    :class="{
      'snackbar fixed mb-8 bottom-0 left-1/2 text-white py-2 px-4 rounded-md shadow-xl flex items-center': true,
      'bg-green-500': snackbar.type === 'success',
      'bg-red-500': snackbar.type === 'error'
    }"
  >
    <CheckCircleIcon
      v-if="snackbar.type === 'success'"
      class="w-8"
    />
    
    <XCircleIcon
      v-if="snackbar.type === 'error'"
      class="w-8"
    />

    <div class="ml-2">
      {{ snackbar.message }}
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/solid'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Snackbar',
  components: {
    CheckCircleIcon,
    XCircleIcon
  },
  setup () {
    const store = useStore()
    const snackbar = computed(() => store.getters.snackbar)

    watch(snackbar, () => {
      if (snackbar.value.visible) {
        setTimeout(() => {
          store.commit('clearSnackbar')
        }, snackbar.value.duration)
      }
    })

    return {
      snackbar
    }
  }
}
</script>

<style lang="scss" scoped>
.snackbar {
  animation: scaleUp .3s forwards;
}

@keyframes scaleUp {
  from {
    transform: scale(0) translateX(-50%);
    transform-origin: top left;
  }
  to {
    transform: scale(1) translateX(-50%);
    transform-origin: top left;
  }
}
</style>
