<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
import { AppFooter } from '@/widgets/app-footer'
import { HomeHero } from '@/widgets/home-hero'
</script>

<template>
  <AppHeader should-use-promo-bar />
  <HomeHero />
  <AppFooter />
</template>
