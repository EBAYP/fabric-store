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
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 4px;
  transition:
    color var(--transition-base),
    background-color var(--transition-base),
    border-color var(--transition-base);

  &--primary {
    color: var(--color-white);
    background: var(--color-accent);
  }

  &--secondary {
    color: var(--color-text);
    background: var(--color-white);
    border-color: var(--color-border);
  }
}
</style>
