<template>
  <header class="app-header">
    <div class="app-header__container container">
      <RouterLink class="app-header__logo" to="/">Saka Tekstil</RouterLink>

      <nav class="app-header__nav" aria-label="Основная навигация">
        <RouterLink class="app-header__link" to="/">Главная</RouterLink>
        <RouterLink class="app-header__link" to="/catalog">Каталог</RouterLink>
        <RouterLink class="app-header__link" to="/about">О компании</RouterLink>
        <RouterLink class="app-header__link" to="/news">Новости</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.app-header {
  background: $color-white;
  border-bottom: 1px solid $color-border-dark;

  &__container {
    display: flex;
    gap: rem(32);
    align-items: center;
    justify-content: space-between;
    min-height: rem(72);
  }

  &__logo {
    font-size: rem(20);
    font-weight: $font-weight-semibold;
    color: $color-black;
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: rem(20);
    align-items: center;
  }

  &__link {
    font-size: rem(15);
    color: $color-text-muted;
    transition: color $transition-base;

    &:hover,
    &.router-link-active {
      color: $color-text-primary;
    }
  }
}
</style>
