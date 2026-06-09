<script setup lang="ts">
import warningIcon from '@/shared/assets/icons/warning.png'

import { ColorSwatch } from '@/shared/ui/color-swatch'

import { mainPaletteColors, seasonalPaletteColors } from '../model/palette'
</script>

<template>
  <section class="fabric-palette">
    <div class="fabric-palette__container container">
      <div class="fabric-palette__header">
        <h2 class="fabric-palette__title">
          Актуальная палитра “Saka Tekstil”
          из 45+ цветов – поможет решить любые задачи, стоящие перед вами
        </h2>

        <div class="fabric-palette__warning">
          <img class="fabric-palette__warning-icon" :src="warningIcon">
          <p class="fabric-palette__warning-text">
            <strong>ВНИМАНИЕ!</strong> Цветопередача на вашем мониторе может значительно отличаться от оригинального цвета
          </p>
        </div>
      </div>

      <ul class="fabric-palette__colors">
        <li v-for="color in mainPaletteColors" :key="color.id" class="fabric-palette__color">
          <ColorSwatch :color="color.color" :name="color.name" />
          <span class="fabric-palette__label">{{ color.name }}</span>
        </li>
      </ul>

      <h2 class="fabric-palette__subtitle">Сезонная палитра</h2>

      <ul class="fabric-palette__colors fabric-palette__colors--seasonal">
        <li v-for="color in seasonalPaletteColors" :key="color.id" class="fabric-palette__color">
          <ColorSwatch :color="color.color" :name="color.name" />
          <span class="fabric-palette__label">{{ color.name }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

$palette-title-width: 560px;
$palette-color-size: 160px;
$palette-section-gap: 100px;
$palette-grid-row-gap: 80px;
$palette-grid-column-gap: 70px;
$palette-grid-margin-top: 80px;
$palette-warning-min-height: 120px;
$palette-warning-text-width: 370px;
$palette-label-gap: 10px;
$palette-swatch-offset: 12px;

.fabric-palette {
  padding-bottom: rem(100);
  background: $color-white;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title,
  &__subtitle {
    width: rem($palette-title-width);
    margin: 0;
    font-size: rem($font-size-title);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;
  }

  &__subtitle {
    margin-top: rem($palette-section-gap);
  }

  &__warning {
    display: flex;
    gap: rem(30);
    align-items: center;
    width: rem($palette-title-width);
    min-height: rem($palette-warning-min-height);
    padding: rem(24) rem(30);
    border: 1px dashed $color-gold-dark;
    border-radius: rem($radius-card);
  }

  &__warning-icon {
    width: rem(60);
    height: rem(60);
  }

  &__warning-text {
    width: rem($palette-warning-text-width);
    font-size: rem($font-size-medium);
    line-height: $line-height-base;
    letter-spacing: $letter-spacing-base;

    strong {
      font-weight: $font-weight-medium;
    }
  }

  &__colors {
    display: grid;
    grid-template-columns: repeat(6, rem($color-card-size));
    gap: rem($palette-grid-row-gap) rem($palette-grid-column-gap);
    padding: 0;
    margin: rem($palette-grid-margin-top) 0 0;
    list-style: none;
  }

  &__colors--seasonal {
    margin-top: rem($palette-section-gap);
  }

  &__color {
    width: rem($palette-color-size);
  }

  :deep(.color-swatch) {
    margin-left: rem($palette-swatch-offset);
  }

  &__label {
    display: block;
    width: rem($palette-color-size);
    margin-top: rem($palette-label-gap);
    font-size: rem($font-size-base);
    font-weight: $font-weight-semibold;
    line-height: $line-height-base;
    letter-spacing: $letter-spacing-base;
  }
}
</style>
