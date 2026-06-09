<script setup lang="ts">
import { ArrowLink } from '@/shared/ui/arrow-link'
</script>

<template>
  <section class="company-overview">
    <div class="company-overview__container container">
      <div class="company-overview__content">
        <h2 class="company-overview__title">
          <span>Saka Tekstil</span> – для тех, кто хочет быстро
          и комфортно получать текстильную продукцию
          <span>высокого качества по адекватной стоимости</span>
        </h2>

        <ul class="company-overview__list">
          <li class="company-overview__item">
            Предоставляем возможность закупки широкого ассортимента: футер, кулирка, джакарт, флис, рибана и многое другое…
          </li>
          <li class="company-overview__item">
            Наша компания является надежным поставщиком и производителем турецкого трикотажного полотна по всему миру
          </li>
        </ul>

        <ArrowLink class="company-overview__link" to="/catalog">Смотреть каталог</ArrowLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.company-overview {
  height: rem(638);
  overflow: hidden;
  background: $color-light-gray;

  &__container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    height: 100%;
  }

  &__image {
    position: absolute;
    top: 0;
    left: rem(-120);
    width: rem(520);
    height: rem(639);
    object-fit: fill;
  }

  &__content {
    width: rem(660);
    padding-top: rem(89);
  }

  &__title {
    margin: 0;
    font-size: rem($font-size-title);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-base;

    span {
      color: $color-gold-dark;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    padding: 0;
    margin: rem(32) 0 0;
    list-style: none;
  }

  &__item {
    position: relative;
    width: rem(500);
    padding-left: rem(60);
    font-size: rem($font-size-large);
    line-height: $line-height-base;
    letter-spacing: $letter-spacing-base;

    &::before {
      position: absolute;
      top: rem(12);
      left: 0;
      width: rem(40);
      height: rem(4);
      content: '';
      background: $color-gold-dark;
    }
  }

  &__link {
    margin-top: rem(39);
  }
}
</style>
