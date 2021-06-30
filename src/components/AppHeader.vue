<template>
  <header class="flex items-center py-[23px]">
    <!-- 搜尋框 -->
    <div class="relative flex items-center text-black mx-auto dark:text-white">
      <input
        type="text"
        class="
          w-[223px]
          h-[39px]
          px-4
          rounded-3xl
          bg-transparent
          border border-black
          dark:border-white
          focus:outline-none
        "
      />
      <fa-icon :icon="['fas', 'search']" class="absolute right-4 text-lg"></fa-icon>
    </div>

    <!-- 日夜切換 -->
    <div>
      <fa-icon
        :icon="['fas', 'adjust']"
        class="dark:text-white text-xl cursor-pointer"
        @click="toggleDark"
      ></fa-icon>
    </div>
  </header>
</template>

<script>
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppHeader',

  setup() {
    const store = useStore()
    const darkMode = computed(() => store.state.darkMode)

    const toggleDark = () => {
      store.dispatch('setDarkMode', !darkMode.value)
    }

    watchEffect(() => {
      const element = document.documentElement
      darkMode.value ? element.classList.add('dark') : element.classList.remove('dark')
    })

    return {
      toggleDark
    }
  }
}
</script>
