<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
import { AppFooter } from '@/widgets/app-footer'
import { HomeHero } from '@/widgets/home-hero'
import { FabricTypes } from '@/widgets/fabric-types'
import { NewsPreview } from '@/widgets/news-preview'
import { CompanyOverview } from '@/widgets/company-overview'
import { FactoryRequest } from '@/widgets/factory-request'
import { FabricPalette } from '@/widgets/fabric-palette'
import { RecentlyViewed } from '@/widgets/recently-viewed'
import { ReputationCertificates } from '@/widgets/reputation-certificates'
</script>

<template>
  <AppHeader should-use-promo-bar />
  <HomeHero />
  <NewsPreview />
  <FabricTypes />
  <CompanyOverview />
  <ReputationCertificates />
  <FabricPalette />
  <FactoryRequest />
  <RecentlyViewed />
  <AppFooter />
</template>
