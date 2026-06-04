<script setup lang="ts">
import catalogChevronIcon from '@/shared/assets/icons/catalog-chevron.svg'
</script>

<template>
  <nav class="header-navigation" aria-label="Основная навигация">
    <div class="header-navigation__container container">
      <RouterLink class="header-navigation__link" to="/">Главная</RouterLink>
      <RouterLink class="header-navigation__link header-navigation__link--catalog" to="/catalog">
        <span>Каталог</span>
        <img class="header-navigation__catalog-icon" :src="catalogChevronIcon">
      </RouterLink>
      <RouterLink class="header-navigation__link" to="/about">О компании</RouterLink>
      <RouterLink class="header-navigation__link" to="/news">Новости</RouterLink>
      <RouterLink class="header-navigation__link" to="/delivery">Доставка и оплата</RouterLink>
      <RouterLink class="header-navigation__link" to="/contacts">Контакты</RouterLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.header-navigation {
  color: $color-white;
  background: rgba($color-dark, 0.95);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: rem($header-menu-height);
  }

  &__link {
    font-size: rem($font-size-base);
    font-weight: $font-weight-regular;
    line-height: $line-height-tight;
    color: $color-white;
    letter-spacing: rem(1);
    transition: color $transition-base;

    &.router-link-active {
      color: $color-gold;
    }

    @include hover {
      color: $color-gold;
    }

    &--catalog {
      display: flex;
      gap: rem(10);
      align-items: center;
    }
  }

  &__catalog-icon {
    width: rem(13);
    height: rem(8);
  }
}
</style>
