<script setup lang="ts">
import { CarouselArrow } from '@/shared/ui/carousel-arrow'
import { useCircularCarousel } from '@/shared/lib/circular-carousel'

import { certificateSlides } from '../model/certificates'

const { showNextSlide: showNextCertificate, showPreviousSlide: showPreviousCertificate, trackTransform: certificateTrackTransform } = useCircularCarousel(certificateSlides.length, 3, 400)
</script>

<template>
  <section class="reputation-certificates">
    <CarouselArrow
      class="reputation-certificates__arrow reputation-certificates__arrow--previous"
      label="Предыдущий сертификат"
      @click="showPreviousCertificate"
    />
    <CarouselArrow
      class="reputation-certificates__arrow reputation-certificates__arrow--next"
      direction="next"
      label="Следующий сертификат"
      @click="showNextCertificate"
    />

    <div class="reputation-certificates__container container">
      <h2 class="reputation-certificates__title">Saka Tekstil дорожит своей репутацией</h2>

      <div class="reputation-certificates__gallery">
        <div class="reputation-certificates__track" :style="{ transform: certificateTrackTransform }">
          <div v-for="certificate in certificateSlides" :key="certificate.id" class="reputation-certificates__slide">
            <img
              class="reputation-certificates__image"
              :src="certificate.image"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.reputation-certificates {
  position: relative;
  padding-top: rem(120);
  padding-bottom: rem(194);
  background: $color-white;

  &__title {
    width: rem(860);
    margin: 0 auto;
    font-size: rem($font-size-title);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    text-align: center;
    letter-spacing: $letter-spacing-base;
  }

  &__gallery {
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
    flex: 0 0 rem(360);
  }

  &__image {
    width: rem(360);
    height: rem(504);
    object-fit: cover;
  }

  &__arrow {
    position: absolute;
    top: rem(412);
  }

  &__arrow--previous {
    left: rem(50);
  }

  &__arrow--next {
    right: rem(50);
  }
}
</style>
