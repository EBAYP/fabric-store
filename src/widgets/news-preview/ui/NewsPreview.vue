<script setup lang="ts">
import { NewsCard } from '@/shared/ui/news-card'

import { newsPreviewItems } from '../model/news'
</script>

<template>
  <section class="news-preview">
    <div class="news-preview__container container">
      <NewsCard
        v-for="item in newsPreviewItems"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :date="item.date"
        :image="item.image"
        :href="item.href"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/functions' as *;
@use '@/app/styles/variables' as *;

.news-preview {
  padding-bottom: rem(130);
  background: $color-white;

  &__container {
    display: grid;
    grid-template-columns: repeat(3, rem($news-card-width));
    gap: rem(40);
  }
}
</style>
