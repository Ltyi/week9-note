<template>
  <div class="relative font-noto min-h-screen dark:bg-dark-1 transition-all z-10">
    <div class="container mx-auto px-4">
      <app-header></app-header>
      <router-view />
    </div>
  </div>

  <!-- 新增筆記視窗 -->
  <list-add></list-add>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import ListAdd from '@/components/ListAdd.vue'

export default {
  components: {
    AppHeader,
    ListAdd
  }
}
</script>
