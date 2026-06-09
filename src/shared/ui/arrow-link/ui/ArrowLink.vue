<script setup lang="ts">
import arrowRightIcon from '@/shared/assets/icons/arrow-right.svg'

withDefaults(
  defineProps<{
    to: string
    width?: number
    height?: number
    gap?: number
    iconSize?: number
  }>(),
  {
    width: 300,
    height: 58,
    gap: 55,
    iconSize: 24,
  }
)
</script>

<template>
  <RouterLink
    class="arrow-link"
    :style="{
      '--arrow-link-width': `${width}px`,
      '--arrow-link-height': `${height}px`,
      '--arrow-link-gap': `${gap}px`,
      '--arrow-link-icon-size': `${iconSize}px`,
    }"
    :to="to"
  >
    <span>
      <slot />
    </span>
    <img class="arrow-link__icon" :src="arrowRightIcon">
  </RouterLink>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.arrow-link {
  display: inline-flex;
  gap: var(--arrow-link-gap);
  align-items: center;
  justify-content: center;
  width: var(--arrow-link-width);
  height: var(--arrow-link-height);
  font-size: rem($font-size-medium);
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  color: $color-dark;
  letter-spacing: $letter-spacing-button;
  background: $color-gold;
  border-radius: rem($radius-pill);
  transition: background-color $transition-base;

  @include hover {
    background: $color-gold-dark;
  }

  &__icon {
    width: var(--arrow-link-icon-size);
    height: var(--arrow-link-icon-size);
  }
}
</style>
