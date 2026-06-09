<script setup lang="ts">
import { CarouselArrow } from '@/shared/ui/carousel-arrow'
import { useCircularCarousel } from '@/shared/lib/circular-carousel'
import { ProductCard } from '@/shared/ui/product-card'

import { recentlyViewedSlides } from '../model/products'

const { showNextSlide: showNextProduct, showPreviousSlide: showPreviousProduct, trackTransform: productTrackTransform } = useCircularCarousel(recentlyViewedSlides.length, 4, 300)
</script>

<template>
  <section class="recently-viewed">
    <CarouselArrow
      class="recently-viewed__arrow recently-viewed__arrow--previous"
      label="Предыдущие товары"
      variant="light"
      @click="showPreviousProduct"
    />
    <CarouselArrow
      class="recently-viewed__arrow recently-viewed__arrow--next"
      direction="next"
      label="Следующие товары"
      variant="light"
      @click="showNextProduct"
    />

    <div class="recently-viewed__container container">
      <h2 class="recently-viewed__title">Недавно просмотренные</h2>

      <div class="recently-viewed__products">
        <div class="recently-viewed__track" :style="{ transform: productTrackTransform }">
          <div v-for="product in recentlyViewedSlides" :key="product.id" class="recently-viewed__slide">
            <ProductCard
              :title="product.title"
              :price="product.price"
              :width="product.width"
              :image="product.image"
              :to="product.to"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.recently-viewed {
  position: relative;
  min-height: rem(650);
  padding-top: rem(70);
  background: $color-light-gray;

  &__title {
    width: rem(560);
    margin: 0;
    font-size: rem($font-size-title);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;
  }

  &__products {
    margin-top: rem(30);
    overflow: hidden;
  }

  &__track {
    display: flex;
    gap: rem(40);
    width: max-content;
    transition: transform 0.5s ease;
  }

  &__slide {
    flex: 0 0 rem($product-card-width);
  }

  &__arrow {
    position: absolute;
    top: rem(326);
  }

  &__arrow--previous {
    left: rem(50);
  }

  &__arrow--next {
    right: rem(50);
  }
}
</style>
