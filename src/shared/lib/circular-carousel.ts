import { computed, ref } from 'vue'

export function useCircularCarousel(
  slideCount: number,
  visibleSlideCount: number,
  slideWidth: number,
) {
  const activeSlideIndex = ref(0)
  const lastSlideIndex = computed(() => Math.max(0, slideCount - visibleSlideCount))
  const trackTransform = computed(() => `translateX(-${activeSlideIndex.value * slideWidth}px)`)

  function showPreviousSlide() {
    activeSlideIndex.value =
      activeSlideIndex.value === 0 ? lastSlideIndex.value : activeSlideIndex.value - 1
  }

  function showNextSlide() {
    activeSlideIndex.value =
      activeSlideIndex.value === lastSlideIndex.value ? 0 : activeSlideIndex.value + 1
  }

  return {
    activeSlideIndex,
    lastSlideIndex,
    trackTransform,
    showNextSlide,
    showPreviousSlide,
  }
}
