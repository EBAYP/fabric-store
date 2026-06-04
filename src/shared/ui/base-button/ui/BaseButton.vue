<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
  }>(),
  {
    variant: 'primary'
  }
)
</script>

<template>
  <button class="base-button" :class="`base-button--${variant}`" type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: rem(44);
  padding: rem(10) rem(20);
  font-weight: $font-weight-medium;
  border: 1px solid transparent;
  border-radius: rem($radius-small);
  transition:
    color $transition-base,
    background-color $transition-base,
    border-color $transition-base;

  &--primary {
    color: $color-white;
    background: $color-gold;
  }

  &--secondary {
    color: $color-text-primary;
    background: $color-white;
    border-color: $color-border-dark;
  }
}
</style>
