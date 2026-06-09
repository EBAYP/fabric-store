<script setup lang="ts">
import arrowLeftIcon from '@/shared/assets/icons/arrow-left.svg'

withDefaults(
  defineProps<{
    direction?: 'previous' | 'next'
    variant?: 'light' | 'gray'
    label: string
  }>(),
  {
    direction: 'previous',
    variant: 'gray',
  }
)
</script>

<template>
  <button
    class="carousel-arrow"
    :class="[`carousel-arrow--${direction}`, `carousel-arrow--${variant}`]"
    type="button"
    :aria-label="label"
  >
    <img class="carousel-arrow__icon" :src="arrowLeftIcon">
  </button>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.carousel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: rem($carousel-arrow-size);
  height: rem($carousel-arrow-size);
  border-radius: 50%;
  transition: background-color $transition-base;

  @include hover {
    background: $color-gray;
  }

  &--gray {
    background: $color-light-gray;
  }

  &--light {
    background: $color-white;
  }

  &--next {
    .carousel-arrow__icon {
      transform: rotate(180deg);
    }
  }

  &__icon {
    width: rem($icon-size);
    height: rem($icon-size);
  }
}
</style>
