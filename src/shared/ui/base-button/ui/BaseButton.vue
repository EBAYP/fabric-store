<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'gold'
    shape?: 'default' | 'pill'
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    shape: 'default',
    type: 'button',
  }
)
</script>

<template>
  <button class="base-button" :class="[`base-button--${variant}`, `base-button--${shape}`]" :type="type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: rem(45);
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

    @include hover {
      background: $color-gold-dark;
    }
  }

  &--secondary {
    color: $color-text-primary;
    background: $color-white;
    border-color: $color-border-dark;

    @include hover {
      color: $color-white;
      background: $color-dark;
    }
  }

  &--gold {
    color: $color-dark;
    background: $color-gold;

    @include hover {
      background: $color-gold-dark;
    }
  }

  &--pill {
    border-radius: rem($radius-pill);
  }
}
</style>
