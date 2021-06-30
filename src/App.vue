<template>
  <div class="font-noto min-h-screen dark:bg-primary-dark transition-all">
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
