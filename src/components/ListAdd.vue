<template>
  <app-dialog v-model="addDialog">
    <div class="font-bold">
      <div class="text-lg px-5">新增筆記</div>

      <div class="h-px bg-[#D8D8D8] my-4"></div>

      <div class="px-5 mb-7">
        <span class="mr-4">筆記名稱</span>
        <input
          type="text"
          class="w-[173px] h-[33px] bg-[#f4f4f4] rounded border-2 border-black px-2"
          v-model="form.title"
        />
      </div>

      <div class="px-5 mb-3">選擇封面</div>

      <div class="flex px-5 flex-wrap md:flex-nowrap">
        <div
          v-for="item in covers"
          :key="item.value"
          :class="item.class"
          class="relative rounded bg-cover mr-4 w-1/4 h-[72px] cursor-pointer"
          @click="form.cover = item.value"
        >
          <div
            :class="
              item.value === form.cover ? 'border-yellow-400' : 'border-transparent'
            "
            class="
              absolute
              inset-0
              transition-all
              duration-100
              border-2
              rounded
              hover:bg-white/50
            "
          ></div>
        </div>
      </div>

      <div class="h-px bg-[#D8D8D8] my-4"></div>

      <div class="flex px-5">
        <p v-if="showError" class="text-red-600">標題或封面尚未填寫或選擇</p>
        <button
          class="w-[90px] h-[37px] rounded bg-black text-white ml-auto"
          @click="submit"
        >
          確定
        </button>
      </div>
    </div>
  </app-dialog>
</template>

<script>
import { computed, nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'
import AppDialog from '@/components/AppDialog.vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ListAdd',

  components: {
    AppDialog
  },

  setup() {
    const store = useStore()
    const covers = [
      {
        value: 1,
        class: 'bg-cover1'
      },
      {
        value: 2,
        class: 'bg-cover2'
      },
      {
        value: 3,
        class: 'bg-cover3'
      },
      {
        value: 4,
        class: 'bg-cover4'
      },
      {
        value: 5,
        class: 'bg-cover5'
      }
    ]
    const addDialog = computed({
      get: () => store.state.addDialog,
      set: val => store.dispatch('setAddDialog', val)
    })
    const form = ref({ title: '', cover: '' })
    const isError = computed(() => !form.value.title || !form.value.cover)
    const showError = ref(false)

    watch(addDialog, val => {
      if (!val) reset()
    })

    const submit = () => {
      if (isError.value) {
        showError.value = true
        return
      }

      const payload = {
        id: uuidv4(),
        star: false,
        ...form.value
      }

      store.dispatch('addNote', payload)

      form.value = { title: '', cover: '' }
      showError.value = false
      addDialog.value = false
    }

    const reset = () => {
      nextTick(() => {
        form.value = { title: '', cover: '' }
        showError.value = false
      })
    }

    return {
      addDialog,
      covers,
      form,
      showError,
      submit
    }
  }
}
</script>
