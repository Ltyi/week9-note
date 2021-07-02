import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { v4 as uuidv4 } from 'uuid'

export default function useNote() {
  const store = useStore()
  const router = useRouter()

  // [新增筆記視窗開啟狀態]
  const addIsOpen = computed({
    get: () => store.state.addIsOpen,
    set: val => store.dispatch('setAddIsOpen', val)
  })

  // [表單內容/驗證]
  const form = ref({ title: '', cover: '' })
  const fieldInvalid = computed(() => !form.value.title || !form.value.cover)
  const showError = ref(false)

  // [打開新增筆記視窗]
  const addOpen = () => store.dispatch('setAddIsOpen', true)

  // [新增送出]
  const addSubmit = () => {
    if (fieldInvalid.value) {
      showError.value = true
      return
    }

    const payload = { id: uuidv4(), star: false, content: '', ...form.value }
    store.dispatch('addNote', payload)

    // 關閉新增筆記視窗
    addIsOpen.value = false
  }

  // [監控視窗開啟狀態]
  watch(addIsOpen, val => {
    if (!val) {
      setTimeout(() => {
        form.value = { title: '', cover: '' }
        showError.value = false
      }, 300)
    }
  })

  // [切換筆記星號]
  const listStarToggle = id => store.dispatch('setNoteStar', id)

  // [筆記詳細跳轉]
  const goDetail = id => router.push(`/note/${id}`)

  return {
    addIsOpen,
    form,
    showError,
    addOpen,
    addSubmit,
    listStarToggle,
    goDetail
  }
}
