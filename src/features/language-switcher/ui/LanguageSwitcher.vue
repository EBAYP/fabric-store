<script setup lang="ts">
import { ref } from 'vue'

type Language = 'ru' | 'en'

const selectedLanguage = ref<Language>('ru')

function selectLanguage(language: Language) {
  selectedLanguage.value = language
}
</script>

<template>
  <div class="language-switcher" aria-label="Language selection">
    <button
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': selectedLanguage === 'ru' }"
      type="button"
      @click="selectLanguage('ru')"
    >
      RU
    </button>
    <span class="language-switcher__separator">/</span>
    <button
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': selectedLanguage === 'en' }"
      type="button"
      @click="selectLanguage('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/mixins' as *;
@use '@/app/styles/variables' as *;

.language-switcher {
  display: flex;
  gap: rem(4);
  align-items: center;
  font-size: rem($font-size-base);
  font-weight: $font-weight-regular;
  line-height: $line-height-tight;
  letter-spacing: $letter-spacing-base;

  &__button {
    color: $color-text-light-muted;
    text-transform: uppercase;
    transition: color $transition-base;

    @include hover {
      color: $color-white;
    }

    &--active {
      color: $color-white;
    }
  }

  &__separator {
    color: $color-text-light-muted;
  }
}
</style>
