<script setup lang="ts">
import HeaderNavigation from './HeaderNavigation.vue'
import HeaderPromoBar from './HeaderPromoBar.vue'
import HeaderTop from './HeaderTop.vue'

withDefaults(defineProps<{
  shouldUsePromoBar?: boolean
}>(), {
  shouldUsePromoBar: false,
});
</script>

<template>
  <header class="app-header">
    <HeaderTop />
    <HeaderNavigation />
    <HeaderPromoBar v-if="shouldUsePromoBar" />
  </header>
</template>

<style scoped lang="scss">
@use '@/app/styles/variables' as *;

.app-header {
  background: $color-dark;
}
</style>
