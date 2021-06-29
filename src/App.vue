<template>
  <div class="font-noto min-h-screen dark:bg-primary-dark transition-all">
    <div class="container mx-auto">
      <app-header></app-header>
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>
