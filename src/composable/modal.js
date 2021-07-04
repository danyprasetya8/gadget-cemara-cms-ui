import { ref } from 'vue'

export default function useModal() {
  const visible = ref(false)

  const toggle = (val = !visible.value) => {
    visible.value = val
  }

  return {
    visible,
    toggle
  }
}