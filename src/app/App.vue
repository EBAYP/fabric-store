<script setup lang="ts">
import { AppFooter } from '@/widgets/app-footer'
import { AppHeader } from '@/widgets/app-header'
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="app__main">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
  }
}
</style>
