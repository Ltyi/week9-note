<template>
  <app-dialog v-model="addIsOpen">
    <div class="font-bold dark:text-white">
      <div class="text-lg px-5">新增筆記</div>

      <div class="h-px bg-[#D8D8D8] my-4"></div>

      <div class="px-5 mb-7">
        <span class="mr-4">筆記名稱</span>
        <input
          type="text"
          class="
            w-[173px]
            h-[33px]
            bg-[#f4f4f4]
            rounded
            border-2 border-black
            px-2
            dark:text-black
          "
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
        <p v-if="showError" class="text-red-600 dark:text-red-500">
          標題或封面尚未填寫或選擇
        </p>

        <app-btn class="bg-black text-white ml-auto px-[30px]" @click="addSubmit">
          確定
        </app-btn>
      </div>
    </div>
  </app-dialog>
</template>

<script>
import AppDialog from '@/components/AppDialog.vue'
import useNote from '@/composition/useNote.js'

export default {
  name: 'ListAdd',

  components: {
    AppDialog
  },

  setup() {
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

    const { addIsOpen, form, showError, addOpen, addSubmit, listStarToggle } = useNote()

    return {
      covers,
      addIsOpen,
      form,
      showError,
      addOpen,
      addSubmit,
      listStarToggle
    }
  }
}
</script>
