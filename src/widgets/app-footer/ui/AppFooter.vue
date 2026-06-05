<script setup lang="ts">
import logoSakaHoldingIcon from '@/shared/assets/icons/logo-saka-holding.png'
import phoneCallIcon from '@/shared/assets/icons/phone-call.svg'
import instagramIcon from '@/shared/assets/icons/instagram.svg'
import telegramIcon from '@/shared/assets/icons/telegram.svg'
import vkIcon from '@/shared/assets/icons/vk.svg'
import whatsappIcon from '@/shared/assets/icons/whatsapp.svg'

import { BaseButton } from '@/shared/ui/base-button'

const footerNavigationSections = [
  {
    title: 'Навигация',
    links: [
      { label: 'Каталог', href: '/catalog' },
      { label: 'О компании', href: '/about' },
      { label: 'Новости', href: '/news' },
      { label: 'Доставка и оплата', href: '/delivery' },
      { label: 'Контакты', href: '/contacts' },
      { label: 'Корзина', href: '/cart' },
    ],
  },
  {
    title: 'Информация',
    links: [
      { label: 'Помощь', href: '/help' },
      { label: 'Блог', href: '/blog' },
      { label: 'Вопрос-ответ', href: '/faq' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
      { label: 'Карта сайта', href: '/sitemap' },
    ],
  },
]

const socialLinks = [
  { label: 'VK', href: 'https://vk.com', icon: vkIcon },
  { label: 'WhatsApp', href: 'https://wa.me', icon: whatsappIcon },
  { label: 'Telegram', href: 'https://t.me', icon: telegramIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: instagramIcon },
]
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__container container">
      <div class="app-footer__top">
        <RouterLink class="app-footer__logo-link" to="/">
          <img class="app-footer__logo" :src="logoSakaHoldingIcon" alt="Saka Holding">
        </RouterLink>

        <div class="app-footer__navigation">
          <nav v-for="section in footerNavigationSections" :key="section.title" class="app-footer__navigation-section" aria-label="Footer navigation">
            <h2 class="app-footer__title">{{ section.title }}</h2>
            <ul class="app-footer__list">
              <li v-for="link in section.links" :key="link.label">
                <a class="app-footer__link" :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <section class="app-footer__subscription">
          <h2 class="app-footer__title">Следите за новостями</h2>
          <form class="app-footer__form" @submit.prevent>
            <label class="visually-hidden" for="footer-email">Ваш E-mail</label>
            <input id="footer-email" class="app-footer__input" type="email" placeholder="Ваш E-mail">
            <BaseButton class="app-footer__submit" variant="gold" shape="pill" type="submit">Отправить</BaseButton>
          </form>

          <a class="app-footer__phone" href="tel:+902125470826">
            <img class="app-footer__phone-icon" :src="phoneCallIcon" alt="">
            <span>+90 212 547 08 26</span>
          </a>
        </section>
      </div>

      <div class="app-footer__bottom">
        <div class="app-footer__social">
          <p class="app-footer__social-title">Напишите нам,<br>мы онлайн:</p>
          <ul class="app-footer__social-list">
            <li v-for="social in socialLinks" :key="social.label">
              <a class="app-footer__social-link" :href="social.href" target="_blank" rel="noreferrer" :aria-label="social.label">
                <img class="app-footer__social-icon" :src="social.icon" alt="">
              </a>
            </li>
          </ul>
        </div>

        <p class="app-footer__copyright">Copyright © 2023 Сака Текстиль. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

$footer-height: 475px;
$footer-logo-width: 120px;
$footer-logo-height: 64px;
$footer-navigation-first-column-width: 200px;
$footer-navigation-second-column-width: 260px;
$footer-subscription-width: 460px;
$footer-form-width: 440px;
$footer-form-height: 55px;
$footer-submit-width: 180px;

.app-footer {
  color: $color-white;
  background: $color-dark;

  &__container {
    display: flex;
    flex-direction: column;
    min-height: rem($footer-height);
    padding-top: rem(42);
    padding-bottom: rem(53);
  }

  &__top {
    display: flex;
    align-items: flex-start;
  }

  &__logo-link {
    flex: 0 0 rem($footer-logo-width);
    margin-right: rem(80);
  }

  &__logo {
    width: rem($footer-logo-width);
    height: rem($footer-logo-height);
    object-fit: contain;
  }

  &__navigation {
    display: grid;
    flex: 0 0 rem($footer-navigation-first-column-width + $footer-navigation-second-column-width);
    grid-template-columns: rem($footer-navigation-first-column-width) rem($footer-navigation-second-column-width);
    margin-top: rem(12);
  }

  &__navigation-section {
    min-width: 0;
  }

  &__subscription {
    width: rem($footer-subscription-width);
    margin-top: rem(12);
    margin-left: auto;
  }

  &__subscription &__title {
    width: rem($footer-form-width);
    margin-left: auto;
  }

  &__title {
    margin: 0;
    font-size: rem($font-size-medium);
    font-weight: $font-weight-semibold;
    line-height: 1.514;
    letter-spacing: $letter-spacing-base;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    padding-left: 0;
    margin-top: rem(20);
    list-style: none;
  }

  &__link {
    display: inline-flex;
    font-size: rem($font-size-base);
    font-weight: $font-weight-regular;
    line-height: 1.5;
    color: $color-white;
    letter-spacing: $letter-spacing-base;
    transition: color $transition-base;

    @include hover {
      color: $color-gold;
    }
  }

  &__form {
    position: relative;
    width: rem($footer-form-width);
    height: rem($footer-form-height);
    margin-top: rem(20);
    margin-left: auto;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 0 rem(202) 0 rem(40);
    font-size: rem($font-size-base);
    font-weight: $font-weight-regular;
    line-height: 1.5;
    color: $color-white;
    letter-spacing: $letter-spacing-base;
    outline: 0;
    background: rgba($color-white, 0.05);
    border: 0;
    border-radius: rem($radius-pill);

    &::placeholder {
      color: $color-white;
      opacity: 1;
    }

    &:focus {
      box-shadow: inset 0 0 0 1px rgba($color-white, 0.35);
    }
  }

  &__submit {
    position: absolute;
    top: 0;
    right: 0;
    width: rem($footer-submit-width);
    height: rem($footer-form-height);
    min-height: rem($footer-form-height);
    padding: 0;
    font-size: rem($font-size-medium);
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-button;
  }

  &__phone {
    display: flex;
    gap: rem(5);
    align-items: flex-start;
    width: fit-content;
    margin-top: rem(94);
    margin-left: auto;
    font-size: rem(20);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    color: $color-white;
    letter-spacing: $letter-spacing-base;
    transition: color $transition-base;

    @include hover {
      color: $color-gold;
    }
  }

  &__phone-icon {
    width: rem($icon-size);
    height: rem($icon-size);
    margin-top: rem(3);
  }

  &__social {
    display: flex;
    align-items: flex-start;
  }

  &__social-title {
    width: rem(200);
    font-size: rem($font-size-medium);
    font-weight: $font-weight-semibold;
    line-height: 1.5;
    letter-spacing: $letter-spacing-base;
  }

  &__social-list {
    display: flex;
    gap: rem(20);
    padding-left: 0;
    margin-top: rem(7);
    margin-left: rem(-23);
    list-style: none;
  }

  &__social-link {
    display: flex;
    width: rem($icon-size-social);
    height: rem($icon-size-social);
    transition: opacity $transition-base;

    @include hover {
      opacity: 0.75;
    }
  }

  &__social-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__copyright {
    width: rem(660);
    margin-top: rem(11);
    font-size: rem($font-size-base);
    font-weight: $font-weight-regular;
    line-height: 1.514;
    color: $color-text-light-muted;
    text-align: right;
    letter-spacing: $letter-spacing-base;
  }

  &__bottom {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: auto;
  }
}
</style>
