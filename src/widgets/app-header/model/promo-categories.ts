import promoCapitoniyImage from '@/shared/assets/icons/promo-capitoniy.jpg'
import promoFooterImage from '@/shared/assets/icons/promo-footer.jpg'
import promoInterlockImage from '@/shared/assets/icons/promo-interlock.jpg'
import promoKashkorseImage from '@/shared/assets/icons/promo-kashkorse-ribana.jpg'
import promoKulirnayaGladImage from '@/shared/assets/icons/promo-kulirnaya-glad.jpg'
import promoPikeImage from '@/shared/assets/icons/promo-pike.jpg'
import promoSelanikImage from '@/shared/assets/icons/promo-selanik.jpg'
import promoVelurImage from '@/shared/assets/icons/promo-velur.jpg'
import promoViskozaImage from '@/shared/assets/icons/promo-viskoza.jpg'

export interface PromoCategory {
  label: string
  icon: string
}

export const promoCategories: PromoCategory[] = [
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
