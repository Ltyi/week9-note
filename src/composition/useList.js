import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default function useList() {
  const store = useStore()
  const content = ref(null)
  const viewMode = computed(() => store.state.viewMode)
  const starMode = computed(() => store.state.starMode)
  const filteredNotes = computed(() => store.getters.filteredNotes)

  // 切換檢視模式
  const changeView = mode => store.dispatch('setViewMode', mode)

  // 切換筆記星號
  const listStarToggle = id => store.dispatch('setNoteStar', id)

  // 切換星號檢視
  const starModeToggle = () => store.dispatch('setStarMode')

  // 筆記新增
  const addDialog = () => store.dispatch('setAddDialog', true)

  // 列表 resize
  const listResize = () => {
    const breakpoint = {
      xs: { width: 639, size: 3 },
      sm: { width: 767, size: 4 }
    }

    for (const key in breakpoint) {
      const matchMedia = window.matchMedia(`(max-width: ${breakpoint[key].width}px)`)

      if (matchMedia.matches) {
        store.dispatch('setChunkSize', breakpoint[key].size)
        return
      }
    }

    store.dispatch('setChunkSize', 6)
  }

  const resizeObserve = () => {
    onMounted(() => {
      const ro = new ResizeObserver(() => {
        listResize()
      })

      ro.observe(content.value)
    })
  }

  return {
    content,
    viewMode,
    starMode,
    filteredNotes,
    resizeObserve,
    changeView,
    listStarToggle,
    starModeToggle,
    addDialog
  }
}
