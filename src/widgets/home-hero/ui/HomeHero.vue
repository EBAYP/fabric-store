<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import arrowRightIcon from '@/shared/assets/icons/arrow-right.svg'
import CompanyWomanWithFabricStackImage from '@/shared/assets/images/company-woman-with-fabric-stack.png'

import { BaseButton } from '@/shared/ui/base-button'

const slides = [
  {
    title: 'Здесь будет слайдер\nс различными акциями или <span class="home-hero__title--accent">специальными предложениями</span>',
    image: CompanyWomanWithFabricStackImage,
  },
  {
    title: 'Здесь будет слайдер\nс различными акциями или <span class="home-hero__title--accent">специальными предложениями</span>',
    image: CompanyWomanWithFabricStackImage,
  },
  {
    title: 'Здесь будет слайдер\nс различными акциями или <span class="home-hero__title--accent">специальными предложениями</span>',
    image: CompanyWomanWithFabricStackImage,
  },
  {
    title: 'Здесь будет слайдер\nс различными акциями или <span class="home-hero__title--accent">специальными предложениями</span>',
    image: CompanyWomanWithFabricStackImage,
  },
  {
    title: 'Здесь будет слайдер\nс различными акциями или <span class="home-hero__title--accent">специальными предложениями</span>',
    image: CompanyWomanWithFabricStackImage,
  },
]

const swiperRef = ref<SwiperInstance>()
const activeSlideIndex = ref(0)

const formatSlideNumber = (index: number) => String(index + 1).padStart(2, '0')

const handleSwiper = (swiper: SwiperInstance) => {
  swiperRef.value = swiper
}

const handleSlideChange = (swiper: SwiperInstance) => {
  activeSlideIndex.value = swiper.realIndex
}

const goToSlide = (index: number) => {
  swiperRef.value?.slideTo(index)
}
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__container container">
      <Swiper class="home-hero__slider" :slides-per-view="1" :speed="500" @swiper="handleSwiper" @slide-change="handleSlideChange">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <article class="home-hero__slide">
            <div class="home-hero__content">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <h1 class="home-hero__title" v-html="slide.title"/>  <!-- убрать потенциальную инъекцию (хотя тут константный список, и нахер это все надо) -->

              <BaseButton class="home-hero__button" variant="gold" shape="pill">
                <span>Подробнее</span>
                <img class="home-hero__button-icon" :src="arrowRightIcon" alt="">
              </BaseButton>
            </div>

            <img class="home-hero__image" :src="slide.image" alt="">
          </article>
        </SwiperSlide>
      </Swiper>

      <div class="home-hero__controls">
        <div class="home-hero__pagination" aria-label="Выбор слайда">
          <button
            v-for="(_, index) in slides"
            :key="index"
            class="home-hero__pagination-button"
            :class="{ 'home-hero__pagination-button--active': index === activeSlideIndex }"
            type="button"
            :aria-current="index === activeSlideIndex ? 'true' : undefined"
            @click="goToSlide(index)"
          />
        </div>

        <p class="home-hero__counter">
          <span class="home-hero__counter-current">{{ formatSlideNumber(activeSlideIndex) }}</span>
          <span class="home-hero__counter-separator">/</span>
          <span class="home-hero__counter-total">{{ formatSlideNumber(slides.length - 1) }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

$hero-height: 460px;
$hero-radius: 16px;
$hero-content-left: 100px;
$hero-content-top: 70px;
$hero-image-width: 518px;
$hero-image-height: 550px;
$hero-image-top: -68px;
$hero-image-right: 60px;

.home-hero {
  padding-top: rem(40);
  padding-bottom: rem(80);
  background: $color-white;

  &__container {
    position: relative;
  }

  &__slider {
    width: 100%;
    height: rem($hero-height);
    overflow: visible;
    border-radius: rem($hero-radius);
    clip-path: inset(rem(-80) 0 0 0 round rem($hero-radius));
  }

  &__slide {
    position: relative;
    display: flex;
    height: rem($hero-height);
    overflow: visible;
    background: linear-gradient(292deg, rgb(255, 255, 255, 0.02) 50%, rgb(25, 36, 47, 0) 50%), $color-dark;
    border-radius: rem($hero-radius);
  }

  &__content {
    z-index: 1;
    display: flex;
    flex: 0 0 rem(550);
    flex-direction: column;
    align-items: flex-start;
    padding-top: rem($hero-content-top);
    padding-left: rem($hero-content-left);
  }

  &__title {
    width: rem(450);
    margin: 0;
    font-size: rem($font-size-hero);
    font-weight: $font-weight-semibold;
    line-height: 1.334;
    color: $color-white;
    letter-spacing: $letter-spacing-base;
    white-space: pre-line;

    :deep(.home-hero__title--accent) {
      color: $color-gold;
    }
  }

  &__button {
    gap: rem(74);
    width: rem(260);
    height: rem(60);
    min-height: rem(60);
    padding: 0 rem(30);
    margin-top: rem(30);
    font-size: rem($font-size-medium);
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-button;
  }

  &__button-icon {
    width: rem($icon-size);
    height: rem($icon-size);
  }

  &__image {
    position: absolute;
    top: rem($hero-image-top);
    right: rem($hero-image-right);
    width: rem($hero-image-width);
    height: rem($hero-image-height);
    object-fit: contain;
  }

  &__controls {
    position: absolute;
    bottom: rem(36);
    left: rem($hero-content-left);
    z-index: 1;
    display: flex;
    gap: rem(47);
    align-items: center;
  }

  &__pagination {
    display: flex;
    gap: rem(25);
  }

  &__pagination-button {
    width: rem(30);
    height: rem(3);
    background: rgba($color-white, 0.15);
    transition: background-color $transition-base;

    @include hover {
      background: rgba($color-white, 0.35);
    }
  }

  &__pagination-button--active {
    background: $color-gold-dark;
  }

  &__counter {
    display: flex;
    gap: rem(15);
    margin: 0;
    font-size: rem($font-size-medium);
    font-weight: $font-weight-regular;
    line-height: $line-height-tight;
    color: rgba($color-white, 0.25);
    letter-spacing: 0.13em;
  }

  &__counter-current {
    color: $color-white;
  }
}
</style>
