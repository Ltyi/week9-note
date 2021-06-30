<template>
  <div class="flex flex-wrap -mx-4">
    <div v-for="item in list" :key="item.id" class="w-6/12 sm:w-4/12 md:w-2/12 px-4 mb-8">
      <!-- 新增筆記 -->
      <div v-if="item.add">
        <div
          class="
            flex
            justify-between
            px-5
            py-4
            rounded
            cursor-pointer
            border border-black
            dark:border-white
          "
          @click="addDialog"
        >
          <p>新增筆記</p>

          <button>
            <fa-icon
              :icon="['fas', 'plus']"
              class="text-xl text-black dark:text-white"
            ></fa-icon>
          </button>
        </div>
      </div>

      <!-- 筆記列表 -->
      <div
        v-else
        class="
          flex
          justify-between
          px-5
          py-4
          rounded
          shadow-tile
          cursor-pointer
          bg-[#f4f4f4]
          dark:bg-[#454558]
        "
      >
        <p>{{ item.title }}</p>

        <button @click="listStarToggle(item.id)">
          <fa-icon
            :icon="item.star ? ['fas', 'star'] : ['far', 'star']"
            class="text-xl text-black dark:text-white"
          ></fa-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useList from '@/composition/useList.js'

export default {
  name: 'ListView',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  setup() {
    const { listStarToggle, addDialog } = useList()

    return {
      listStarToggle,
      addDialog
    }
  }
}
</script>
