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
.app-header {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);

  &__container {
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;
    min-height: 72px;
  }

  &__logo {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-black);
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
  }

  &__link {
    font-size: 15px;
    color: var(--color-muted);
    transition: color var(--transition-base);

    &:hover,
    &.router-link-active {
      color: var(--color-text);
    }
  }
}
</style>
