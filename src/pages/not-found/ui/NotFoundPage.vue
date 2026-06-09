<script setup lang="ts">
import cat404Image from '@/shared/assets/icons/cat-404.svg'
import { BaseButton } from '@/shared/ui/base-button'
</script>

<template>
  <section class="not-found-page">
    <div class="not-found-page__container container">
      <img class="not-found-page__image" :src="cat404Image" alt="">
      <h1 class="not-found-page__title">404</h1>
      <p class="not-found-page__text">Страница не найдена</p>
      <RouterLink to="/">
        <BaseButton variant="gold" shape="pill">На главную</BaseButton>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.not-found-page {
  padding-block: rem($spacing-section);

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__image {
    width: rem(280);
    height: rem(220);
    margin-bottom: rem(20);
  }

  &__title {
    margin: 0 0 rem(20);
    font-size: rem(72);
    font-weight: $font-weight-bold;
    line-height: 1;
    color: $color-dark;
  }

  &__text {
    margin: 0 0 rem(40);
    font-size: rem($font-size-title);
    font-weight: $font-weight-regular;
    color: $color-text-primary;
  }
}
</style>
