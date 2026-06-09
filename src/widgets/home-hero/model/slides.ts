import CompanyWomanWithFabricStackImage from '@/shared/assets/images/company-woman-with-fabric-stack.png'

export interface HeroSlide {
  id: number
  title: string
  accentWords: string[]
  image: string
}

export interface TitlePart {
  text: string
  accent: boolean
}

export function splitTitleByAccent(title: string, accentWords: string[]): TitlePart[] {
  if (accentWords.length === 0) {
    return [{ text: title, accent: false }]
  }

  const escapedWords = accentWords.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escapedWords.join('|')})`, 'g')
  const accentSet = new Set(accentWords)

  return title
    .split(pattern)
    .filter((part) => part.length > 0)
    .map((text) => ({ text, accent: accentSet.has(text) }))
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Здесь будет слайдер\nс различными акциями или специальными предложениями',
    accentWords: ['специальными предложениями'],
    image: CompanyWomanWithFabricStackImage,
  },
  {
    id: 2,
    title: 'Здесь будет слайдер\nс различными акциями или специальными предложениями',
    accentWords: ['специальными предложениями'],
    image: CompanyWomanWithFabricStackImage,
  },
  {
    id: 3,
    title: 'Здесь будет слайдер\nс различными акциями или специальными предложениями',
    accentWords: ['специальными предложениями'],
    image: CompanyWomanWithFabricStackImage,
  },
  {
    id: 4,
    title: 'Здесь будет слайдер\nс различными акциями или специальными предложениями',
    accentWords: ['специальными предложениями'],
    image: CompanyWomanWithFabricStackImage,
  },
  {
    id: 5,
    title: 'Здесь будет слайдер\nс различными акциями или специальными предложениями',
    accentWords: ['специальными предложениями'],
    image: CompanyWomanWithFabricStackImage,
  },
]
