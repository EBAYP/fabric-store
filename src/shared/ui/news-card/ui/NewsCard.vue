<script setup lang="ts">
import arrowUpRightIcon from '@/shared/assets/icons/arrow-up-right.svg'

defineProps<{
  title: string
  description: string
  date: string
  image: string
  href?: string
}>()
</script>

<template>
  <article class="news-card">
    <img class="news-card__image" :src="image">
    <div class="news-card__overlay" />

    <a class="news-card__action" :href="href ?? '#'" aria-label="Открыть новость">
      <img class="news-card__action-icon" :src="arrowUpRightIcon">
    </a>

    <div class="news-card__content">
      <h3 class="news-card__title">{{ title }}</h3>
      <p class="news-card__description">{{ description }}</p>
      <time class="news-card__date">{{ date }}</time>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

$news-card-width: 360px;
$news-card-height: 400px;
$news-card-image-height: 240px;
$news-card-image-bottom-overlap: 48px;
$news-card-content-offset: 40px;

.news-card {
  position: relative;
  width: rem($news-card-width);
  height: rem($news-card-height);
  overflow: hidden;
  color: $color-white;
  background: $color-dark;
  border-radius: rem($radius-card);

  &__image {
    width: 100%;
    height: rem($news-card-image-height);
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: rem($news-card-image-height);
    background: linear-gradient(180deg, rgb(25, 36, 47, 0) 0%, $color-dark 100%);
  }

  &__action {
    position: absolute;
    top: rem(30);
    right: rem(30);
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(50);
    height: rem(50);
    background: $color-gold;
    border-radius: 50%;
    transition: background-color $transition-base;

    @include hover {
      background: $color-gold-dark;
    }
  }

  &__action-icon {
    width: rem($icon-size);
    height: rem($icon-size);
  }

  &__content {
    position: absolute;
    top: rem($news-card-image-height - $news-card-image-bottom-overlap);
    left: rem($news-card-content-offset);
    display: flex;
    flex-direction: column;
    width: rem(276);
  }

  &__title {
    width: rem(260);
    margin: 0;
    font-size: rem($font-size-large);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;
    white-space: pre-line;
  }

  &__description {
    margin-top: rem(20);
    font-size: rem($font-size-base);
    font-weight: $font-weight-light;
    line-height: 1.5;
    letter-spacing: $letter-spacing-base;
  }

  &__date {
    margin-top: rem(21);
    font-size: rem($font-size-small);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: 0.1em;
  }
}
</style>
