<script setup lang="ts">
import shoppingCartIcon from '@/shared/assets/icons/shopping-cart.svg'

defineProps<{
  count: number
}>()
</script>

<template>
  <button class="cart-button" type="button" aria-label="Корзина">
    <img class="cart-button__icon" :src="shoppingCartIcon" alt="">
    <span v-if="count > 0" class="cart-button__count">
      <span class="cart-button__count-text">{{ count }}</span>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.cart-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: rem(40);
  height: rem(40);
  color: $color-white;
  background: rgba($color-white, 0.05);
  border: 0;
  border-radius: $radius-pill;
  transition: background-color $transition-base;

  @include hover {
    background: rgba($color-white, 0.15);
  }

  &__icon {
    width: rem($icon-size);
    height: rem($icon-size);
  }

  &__count {
    position: absolute;
    top: rem(-3);
    right: rem(-3);
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(16);
    height: rem(16);
    font-size: rem(10);
    font-weight: $font-weight-medium;
    line-height: 0;
    color: $color-white;
    background: $color-gold-dark;
    border-radius: $radius-pill;
  }

  &__count-text {
    line-height: 1;
  }
}
</style>
