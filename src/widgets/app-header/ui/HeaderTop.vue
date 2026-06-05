<script setup lang="ts">
import logoErosIcon from '@/shared/assets/icons/logo-eros.png'
import logoSakaHoldingIcon from '@/shared/assets/icons/logo-saka-holding.png'
import logoSakaIcon from '@/shared/assets/icons/logo-saka.png'
import logoTorTexIcon from '@/shared/assets/icons/logo-tt.png'
import phoneCallIcon from '@/shared/assets/icons/phone-call.svg'
import userIcon from '@/shared/assets/icons/user.svg'

import { LanguageSwitcher } from '@/features/language-switcher'
import { CartButton } from '@/shared/ui/cart-button'
</script>

<template>
  <div class="header-top">
    <div class="header-top__container container">
      <RouterLink to="/">
        <img class="header-top__main-logo" :src="logoSakaHoldingIcon" alt="Saka Holding">
      </RouterLink>

      <div class="header-top__partner-logos">
        <img class="header-top__partner-logo" :src="logoSakaIcon" alt="Saka">
        <img class="header-top__partner-logo" :src="logoErosIcon" alt="Eros">
        <img class="header-top__partner-logo" :src="logoTorTexIcon" alt="TorTex">
      </div>

      <p class="header-top__descriptor">Производитель турецкого трикотажного полотна</p>

      <div class="header-top__actions">
        <CartButton :count="3" />

        <RouterLink class="header-top__login-link" to="/account">
          <img class="header-top__login-icon" :src="userIcon" alt="">
          <span>Войти</span>
        </RouterLink>

        <div class="header-top__contact">
          <div class="header-top__contact-content">
            <a class="header-top__phone" href="tel:+902125470826">
              <img class="header-top__phone-icon" :src="phoneCallIcon" alt="">
              <span>+90 212 547 08 26</span>
            </a>
            <button class="header-top__callback-button" type="button">Заказать звонок</button>
          </div>
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.header-top {
  color: $color-white;
  background: $color-dark;

  &__container {
    display: flex;
    align-items: center;
    min-height: rem($header-top-height);
  }

  &__main-logo {
    width: rem(120);
    height: rem(64);
    object-fit: contain;
  }

  &__partner-logos {
    display: flex;
    gap: rem(10);
    align-items: center;
    margin-left: rem(20);
  }

  &__partner-logo {
    width: rem(48);
    height: rem(48);
    object-fit: contain;
  }

  &__descriptor {
    width: rem(190);
    margin-left: rem(49);
    font-size: rem($font-size-small);
    font-weight: $font-weight-light;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;
  }

  &__actions {
    display: flex;
    gap: rem(32);
    align-items: center;
    margin-left: auto;
  }

  &__login-link {
    display: flex;
    gap: rem(8);
    align-items: center;
    font-size: rem($font-size-small);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    color: $color-white;
    letter-spacing: $letter-spacing-button;
    transition: color $transition-base;

    @include hover {
      color: $color-gold;
    }
  }

  &__login-icon {
    width: rem($icon-size-small);
    height: rem($icon-size-small);
  }

  &__contact {
    display: flex;
    justify-content: flex-end;
  }

  &__contact-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__phone-icon {
    width: rem($icon-size);
    height: rem($icon-size);
  }

  &__phone {
    display: flex;
    gap: rem(5);
    align-items: center;
    font-size: rem($font-size-large);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    color: $color-white;
    letter-spacing: $letter-spacing-base;
    transition: color $transition-base;

    @include hover {
      color: $color-gold;
    }
  }

  &__callback-button {
    font-size: rem($font-size-small);
    font-weight: $font-weight-light;
    line-height: $line-height-tight;
    color: $color-white;
    letter-spacing: $letter-spacing-button;
    text-decoration: underline;
    text-underline-offset: rem(3);
    transition: color $transition-base;

    @include hover {
      color: $color-gold;
    }
  }
}
</style>
