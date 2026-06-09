<script setup lang="ts">
import catalogChevronIcon from '@/shared/assets/icons/catalog-chevron.svg'
import { primaryNavigationLinks } from '@/shared/config'
</script>

<template>
  <nav class="header-navigation">
    <div class="header-navigation__container container">
      <template v-for="link in primaryNavigationLinks" :key="link.to">
        <RouterLink
          v-if="link.label === 'Каталог'"
          class="header-navigation__link header-navigation__link--catalog"
          :to="link.to"
        >
          <span>{{ link.label }}</span>
          <img class="header-navigation__catalog-icon" :src="catalogChevronIcon" alt="">
        </RouterLink>
        <RouterLink
          v-else
          class="header-navigation__link"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </template>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.header-navigation {
  color: $color-white;
  background: rgba($color-white, 0.05);

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
