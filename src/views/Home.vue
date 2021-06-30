<template>
  <div class="text-black dark:text-white pb-8" ref="content">
    <!-- 列表切換 -->
    <div class="flex items-center h-[38px] my-8">
      <button
        @click="starModeToggle"
        class="
          relative
          px-4
          h-full
          rounded-[5px]
          text-xs
          bg-secondary-light
          dark:bg-secondary-dark
        "
      >
        <fa-icon
          :icon="starMode ? ['fas', 'star'] : ['far', 'star']"
          class="text-sm mr-1"
        ></fa-icon>
        顯示星號筆記
      </button>

      <div class="ml-auto text-xl">
        <button @click="changeView('list-card')">
          <fa-icon
            :icon="['fas', 'list']"
            :class="viewMode !== 'list-card' ? 'opacity-60 mr-4' : 'mr-4'"
          ></fa-icon>
        </button>

        <button @click="changeView('list-view')">
          <fa-icon
            :icon="['fas', 'th-large']"
            :class="viewMode !== 'list-view' ? 'opacity-60' : ''"
          ></fa-icon>
        </button>
      </div>
    </div>

    <!-- 筆記列表 -->
    <component :is="viewMode" :list="filteredNotes"></component>
  </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue'
import ListView from '@/components/ListView.vue'
import useList from '@/composition/useList.js'

export default {
  name: 'Home',

  components: {
    ListCard,
    ListView
  },

  setup() {
    const {
      content,
      viewMode,
      starMode,
      changeView,
      filteredNotes,
      resizeObserve,
      starModeToggle
    } = useList()

    resizeObserve()

    return {
      content,
      viewMode,
      starMode,
      changeView,
      filteredNotes,
      starModeToggle
    }
  }
}
</script>
