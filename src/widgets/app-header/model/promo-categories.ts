import promoKapitoniyImage from '@/shared/assets/images/promo-kapitoniy-textile.jpg'
import promoFooterImage from '@/shared/assets/images/promo-footer-textile.jpg'
import promoInterlockImage from '@/shared/assets/images/promo-interlock-textile.jpg'
import promoKashkorseImage from '@/shared/assets/images/promo-kashkorse-ribana-textile.jpg'
import promoKulirnayaGladImage from '@/shared/assets/images/promo-kulirnaya-glad-textile.jpg'
import promoPikeImage from '@/shared/assets/images/promo-pike-textile.jpg'
import promoSelanikImage from '@/shared/assets/images/promo-selanik-textile.jpg'
import promoVelurImage from '@/shared/assets/images/promo-velur-textile.jpg'
import promoViskozaImage from '@/shared/assets/images/promo-viskoza-textile.jpg'

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
  { label: 'Капитоний', icon: promoKapitoniyImage },
  { label: 'Селаник', icon: promoSelanikImage },
  { label: 'Велюр', icon: promoVelurImage },
  { label: 'Вискоза', icon: promoViskozaImage },
]
