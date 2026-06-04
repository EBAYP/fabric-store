<script setup lang="ts">
import promoCapitoniyImage from '@/shared/assets/icons/promo-capitoniy.jpg'
import promoFooterImage from '@/shared/assets/icons/promo-footer.jpg'
import promoInterlockImage from '@/shared/assets/icons/promo-interlock.jpg'
import promoKashkorseImage from '@/shared/assets/icons/promo-kashkorse-ribana.jpg'
import promoKulirnayaGladImage from '@/shared/assets/icons/promo-kulirnaya-glad.jpg'
import promoPikeImage from '@/shared/assets/icons/promo-pike.jpg'
import promoSelanikImage from '@/shared/assets/icons/promo-selanik.jpg'
import promoVelurImage from '@/shared/assets/icons/promo-velur.jpg'
import promoViskozaImage from '@/shared/assets/icons/promo-viskoza.jpg'

const promoItems = [
  { label: 'Кулирная гладь', icon: promoKulirnayaGladImage },
  { label: 'Футер', icon: promoFooterImage },
  { label: 'Кашкорсе, рибана', icon: promoKashkorseImage },
  { label: 'Пике', icon: promoPikeImage },
  { label: 'Интерлок', icon: promoInterlockImage },
  { label: 'Капитоний', icon: promoCapitoniyImage },
  { label: 'Селаник', icon: promoSelanikImage },
  { label: 'Велюр', icon: promoVelurImage },
  { label: 'Вискоза', icon: promoViskozaImage },
]
</script>

<template>
  <div class="header-promo-bar">
    <div class="header-promo-bar__container container">
      <RouterLink class="header-promo-bar__badge" to="/catalog">Акции</RouterLink>

      <ul class="header-promo-bar__list">
        <li v-for="item in promoItems" :key="item.label" class="header-promo-bar__item">
          <img class="header-promo-bar__icon" :src="item.icon">
          <span class="header-promo-bar__label">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.header-promo-bar {
  color: $color-white;
  background: $color-dark;

  &__container {
    display: flex;
    align-items: center;
    min-height: rem($header-promo-height);
  }

  &__badge {
    display: flex;
    align-items: center;
    align-self: stretch;
    padding-inline: rem(45);
    font-size: rem($font-size-base);
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    color: $color-dark;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-menu;
    background: $color-gold;
  }

  &__list {
    display: flex;
    gap: rem(18);
    align-items: center;
    padding: 0;
    margin: 0 0 0 rem(20);
    list-style: none;
  }

  &__item {
    display: flex;
    gap: rem(10);
    align-items: center;
    white-space: nowrap;
  }

  &__icon {
    width: rem($icon-size);
    height: rem($icon-size);
    object-fit: cover;
    border-radius: $radius-pill;
  }

  &__label {
    font-size: rem(10);
    font-weight: $font-weight-semibold;
    line-height: $line-height-tight;
    letter-spacing: $letter-spacing-menu;
  }
}
</style>
