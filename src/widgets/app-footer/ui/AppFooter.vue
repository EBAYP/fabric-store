<template>
  <footer class="app-footer">
    <div class="app-footer__container container">
      <p class="app-footer__copyright">© 2026 Saka Tekstil</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.app-footer {
  background: $color-white;
  border-top: 1px solid $color-border-dark;

  &__container {
    display: flex;
    align-items: center;
    min-height: rem(72);
  }

  &__copyright {
    font-size: rem($font-size-base);
    color: $color-text-muted;
  }
}
</style>
