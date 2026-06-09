<script setup lang="ts">
import { ArrowLink } from '@/shared/ui/arrow-link'

defineProps<{
  title: string
  price: string
  width: string
  image: string
  to: string
}>()
</script>

<template>
  <article class="product-card">
    <img class="product-card__image" :src="image">

    <div class="product-card__content">
      <h3 class="product-card__title">{{ title }}</h3>
      <div class="product-card__meta">
        <p class="product-card__price">{{ price }}</p>
        <p class="product-card__width">{{ width }}</p>
      </div>

      <ArrowLink class="product-card__link" :to="to" :width="200" :height="53" :gap="42" :icon-size="18">
        Подробнее
      </ArrowLink>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.product-card {
  width: rem($product-card-width);
  height: rem($product-card-height);
  overflow: hidden;
  background: $color-white;
  border-radius: rem($radius-card);

  &__image {
    width: 100%;
    height: rem($product-card-image-height);
    object-fit: cover;
  }

  &__content {
    padding: rem(22) rem(30) rem(19);
  }

  &__title {
    margin: 0;
    font-size: rem($font-size-large);
    font-weight: $font-weight-semibold;
    line-height: $line-height-base;
    letter-spacing: $letter-spacing-base;
  }

  &__meta {
    display: flex;
    gap: rem(17);
    align-items: flex-start;
    margin-top: rem(1);
  }

  &__price {
    margin: 0;
    font-size: rem($font-size-price);
    font-weight: $font-weight-semibold;
    line-height: $line-height-base;
    color: $color-blue;
    letter-spacing: $letter-spacing-base;
  }

  &__width {
    margin-top: rem(11);
    font-size: rem($font-size-small);
    font-weight: $font-weight-medium;
    line-height: $line-height-base;
    color: $color-text-muted;
    letter-spacing: $letter-spacing-base;
  }

  &__link {
    margin-top: rem(12);
    font-size: rem($font-size-base);
  }
}
</style>
