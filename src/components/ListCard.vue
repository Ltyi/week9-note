<template>
  <div
    v-for="(row, i) in list"
    :key="i"
    class="
      relative
      flex
      -mx-4
      mb-[30px]
      sm:mb-[72px]
      before:block before:bg-[#f1f0f0]
      dark:before:bg-dark-2
      before:content-[''] before:w-[calc(100%-150px)]
      sm:before:h-[84px]
      before:absolute
      before:transform
      before:skew-x-[150deg]
      before:bottom-[-42px]
      before:left-1/2
      before:-translate-x-1/2
    "
  >
    <div v-for="item in row" :key="item.id" class="w-4/12 sm:w-3/12 md:w-2/12 px-4">
      <!-- 新增筆記 -->
      <div
        v-if="item.add"
        class="
          relative
          rounded-lg
          cursor-pointer
          border border-black
          dark:border-white dark:bg-[#131313] dark:bg-opacity-50
          before:content-[''] before:block before:pb-[135%]
        "
      >
        <div
          class="absolute inset-0 flex flex-col justify-center items-center"
          @click="addOpen"
        >
          <fa-icon :icon="['fas', 'plus']" class="text-4xl mb-4"></fa-icon>
          <p>新增筆記</p>
        </div>
      </div>

      <!-- 筆記列表 -->
      <div
        v-else
        :style="{
          backgroundImage: item.cover
            ? `url(${require(`@/assets/cover/${item.cover}.jpg`)}) `
            : ''
        }"
        class="
          relative
          rounded-lg
          shadow-card
          cursor-pointer
          bg-cover
          before:content-[''] before:block before:pb-[135%]
        "
      >
        <!-- 透明度遮罩 -->
        <div
          class="
            absolute
            inset-0
            flex flex-col
            justify-between
            bg-white bg-opacity-40
            rounded-lg
            px-4
            py-3
          "
          @click.self="goDetail(item.id)"
        >
          <p class="font-bold text-black">{{ item.title }}</p>

          <button class="self-start" @click="listStarToggle(item.id)">
            <fa-icon
              :icon="item.star ? ['fas', 'star'] : ['far', 'star']"
              class="text-xl text-black"
            ></fa-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useNote from '@/composition/useNote.js'

export default {
  name: 'ListCard',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  setup() {
    const { listStarToggle, addOpen, goDetail } = useNote()

    return {
      listStarToggle,
      addOpen,
      goDetail
    }
  }
}
</script>
