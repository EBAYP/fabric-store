import newsOneImage from '@/shared/assets/images/news-saka-building.png'
import newsTwoImage from '@/shared/assets/images/news-saka-flags.png'
import newsThreeImage from '@/shared/assets/images/news-saka-holding-entrance.png'
import newsFourImage from '@/shared/assets/images/news-textile-production-line.png'
import newsFiveImage from '@/shared/assets/images/news-warehouse-night.png'

export interface NewsPreviewItem {
  id: number
  title: string
  description: string
  date: string
  image: string
  href: string
}

const defaultTitle = 'Пример текста \nдля заголовка новости'
const defaultDescription =
  'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости'
const defaultDate = '31.03.2022'

const newsImageByIndex = [
  newsOneImage,
  newsFiveImage,
  newsFourImage,
  newsThreeImage,
  newsTwoImage,
  newsOneImage,
]

export const newsPreviewItems: NewsPreviewItem[] = newsImageByIndex.map((image, index) => ({
  id: index + 1,
  title: defaultTitle,
  description: defaultDescription,
  date: defaultDate,
  image,
  href: '/news',
}))
