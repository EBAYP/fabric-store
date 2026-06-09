import productOneImage from '@/shared/assets/images/product-kulirnaya-glad-01.png'
import productTwoImage from '@/shared/assets/images/product-kulirnaya-glad-02.png'
import productThreeImage from '@/shared/assets/images/product-kulirnaya-glad-03.png'
import productFourImage from '@/shared/assets/images/product-kulirnaya-glad-04.png'

export const recentlyViewedProducts = [
  {
    id: 1,
    title: 'Кулинарная гладь',
    price: '11,4$',
    width: '180 см',
    image: productOneImage,
    to: '/catalog/kulirnaya-glad',
  },
  {
    id: 2,
    title: 'Кулинарная гладь',
    price: '13$',
    width: '180 см',
    image: productTwoImage,
    to: '/catalog/kulirnaya-glad-2',
  },
  {
    id: 3,
    title: 'Кулинарная гладь',
    price: '122,4$',
    width: '180 см',
    image: productThreeImage,
    to: '/catalog/kulirnaya-glad-3',
  },
  {
    id: 4,
    title: 'Кулинарная гладь',
    price: '13,84$',
    width: '180 см',
    image: productFourImage,
    to: '/catalog/kulirnaya-glad-4',
  },
] as const

export const recentlyViewedSlides = [
  ...recentlyViewedProducts,
  ...recentlyViewedProducts.map((product) => ({
    ...product,
    id: product.id + recentlyViewedProducts.length,
  })),
] as const
