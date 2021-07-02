import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import _ from 'lodash'

export default function useNoteDetail() {
  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  const id = route.params.id * 1
  const note = computed(() => store.state.notes.find(item => item.id === id))

  const form = ref({ ...note.value })

  // [進度是否儲存]
  const isSaved = computed(() => _.isEqual(form.value, note.value))

  // [返回列表]
  const back = () => router.push('/')

  // [儲存進度]
  const save = () => store.dispatch('editNote', form.value)

  return {
    form,
    isSaved,
    back,
    save
  }
}
