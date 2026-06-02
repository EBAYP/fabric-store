<template>
  <footer class="app-footer">
    <div class="app-footer__container container">
      <p class="app-footer__copyright">© 2026 Saka Tekstil</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background: var(--color-white);
  border-top: 1px solid var(--color-border);

  &__container {
    display: flex;
    align-items: center;
    min-height: 72px;
  }

  &__copyright {
    font-size: 14px;
    color: var(--color-muted);
  }
}
</style>
