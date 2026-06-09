<script setup lang="ts">
import { computed } from 'vue'

import { chunk } from '@/shared/lib/chunk'

import { fabricTypes } from '../model/fabric-types'

const fabricTypeRows = computed(() => chunk(fabricTypes, 3))
</script>

<template>
  <section class="fabric-types">
    <div class="fabric-types__container container">
      <h2 class="fabric-types__title">Выбирайте из множества разновидностей тканей</h2>

      <div class="fabric-types__grid">
        <div v-for="(row, rowIndex) in fabricTypeRows" :key="rowIndex" class="fabric-types__row">
          <RouterLink
            v-for="fabricType in row"
            :key="fabricType.id"
            class="fabric-types__card"
            :class="`fabric-types__card--${fabricType.width}`"
            to="/catalog"
          >
            <img class="fabric-types__image" :src="fabricType.image">
            <span class="fabric-types__badge">{{ fabricType.title }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

$fabric-types-card-widths: (
  'small': $fabric-types-card-small-width,
  'medium': $fabric-types-card-medium-width,
  'large': $fabric-types-card-large-width,
);

.fabric-types {
  min-height: rem($fabric-types-height);
  color: $color-white;
  background: $color-dark;

  &__container {
    padding-top: rem(91);
  }

  &__title {
    width: rem(560);
    margin: 0;
    font-size: rem($font-size-title);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    margin-top: rem(30);
  }

  &__row {
    display: flex;
    gap: rem(40);
  }

  &__card {
    position: relative;
    height: rem($fabric-types-card-height);
    overflow: hidden;
    border-radius: rem($radius-card);
    transition: transform $transition-base;

    @include hover {
      transform: translateY(rem(-4));
    }
  }

  @each $name, $width in $fabric-types-card-widths {
    &__card--#{$name} {
      width: rem($width);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__badge {
    position: absolute;
    bottom: rem(30);
    left: rem(30);
    display: inline-flex;
    align-items: center;
    min-height: rem(28);
    padding: rem(5) rem(15);
    font-size: rem($font-size-small);
    font-weight: $font-weight-semibold;
    line-height: $line-height-base;
    color: $color-dark;
    letter-spacing: $letter-spacing-base;
    background: $color-gold;
    border-radius: rem($radius-small);
  }
}
</style>
