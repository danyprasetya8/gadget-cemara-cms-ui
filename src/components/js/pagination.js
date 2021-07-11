import  { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  name: 'Pagination',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  setup (props, { emit }) {
    const previousPage = () => {
      if (props.currentPage <= 1) return
      emit('update:currentPage', props.currentPage - 1)
    }

    const nextPage = () => {
      if (props.currentPage === props.totalPage) return
      emit('update:currentPage', props.currentPage + 1)
    }

    return {
      previousPage,
      nextPage
    }
  }
}
