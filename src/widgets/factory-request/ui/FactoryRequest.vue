<script setup lang="ts">
import arrowRightIcon from '@/shared/assets/icons/arrow-right.svg'

import { BaseButton } from '@/shared/ui/base-button'
</script>

<template>
  <section class="factory-request">
    <div class="factory-request__container container">
      <h2 class="factory-request__title">Фабрика «Saka Tekstil» осуществляет прокрас текстиля на заказ на самых выгодных условиях</h2>
      <p class="factory-request__description">Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время</p>

      <form class="factory-request__form" @submit.prevent>
        <label class="visually-hidden" for="factory-request-name">Ваше имя</label>
        <input id="factory-request-name" class="factory-request__input" type="text" placeholder="Ваше имя">

        <label class="visually-hidden" for="factory-request-phone">Телефон</label>
        <input id="factory-request-phone" class="factory-request__input" type="tel" placeholder="+7 (___) ___-__-__">

        <label class="visually-hidden" for="factory-request-email">Ваш E-mail</label>
        <input id="factory-request-email" class="factory-request__input" type="email" placeholder="Ваш E-mail">

        <BaseButton class="factory-request__submit" variant="gold" shape="pill" type="submit">
          <span>Отправить</span>
          <img class="factory-request__submit-icon" :src="arrowRightIcon">
        </BaseButton>
      </form>

      <p class="factory-request__agreement">Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.factory-request {
  padding-top: rem(100);
  padding-bottom: rem(60);
  background: $color-white;

  &__container {
    height: rem(330);
    padding-top: rem(50);
    color: $color-white;
    text-align: center;
    background: linear-gradient(292deg, rgb(255, 255, 255, 0.02) 50%, rgb(25, 36, 47, 0) 50%), $color-dark;
    border-radius: rem($radius-card);
  }

  &__title {
    width: rem(773);
    margin: 0 auto;
    font-size: rem($font-size-title);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;
  }

  &__description {
    margin-top: rem(18);
    font-size: rem($font-size-large);
    line-height: $line-height-base;
    letter-spacing: $letter-spacing-base;
  }

  &__form {
    display: flex;
    gap: rem(16);
    justify-content: center;
    margin-top: rem(25);
  }

  &__input {
    width: rem(237);
    height: rem(59);
    padding: 0 rem(40);
    font-size: rem($font-size-base);
    line-height: $line-height-base;
    color: $color-white;
    letter-spacing: $letter-spacing-base;
    outline: 0;
    background: rgba($color-white, 0.05);
    border: 0;
    border-radius: rem($radius-card);

    &::placeholder {
      color: $color-white;
      opacity: 1;
    }
  }

  &__submit {
    gap: rem(101);
    width: rem(282);
    height: rem(58);
    min-height: rem(58);
    padding: 0 rem(30);
    font-size: rem($font-size-medium);
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-button;
  }

  &__submit-icon {
    width: rem($icon-size);
    height: rem($icon-size);
  }

  &__agreement {
    margin-top: rem(13);
    font-size: rem($font-size-small);
    line-height: $line-height-base;
    color: rgba($color-white, 0.25);
    letter-spacing: $letter-spacing-base;
  }
}
</style>
