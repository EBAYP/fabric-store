import fabricOneImage from '@/shared/assets/images/fabric-futer-3-nitka.png'
import fabricTwoImage from '@/shared/assets/images/fabric-french-terry.png'
import fabricThreeImage from '@/shared/assets/images/fabric-viskoza.png'
import fabricFourImage from '@/shared/assets/images/fabric-pike.png'
import fabricFiveImage from '@/shared/assets/images/fabric-kulirnaya-glad.png'
import fabricSixImage from '@/shared/assets/images/fabric-biflex.png'

export interface FabricTypeItem {
  id: number
  title: string
  image: string
  width: 'small' | 'medium' | 'large'
}

export const fabricTypes: FabricTypeItem[] = [
  {
    id: 1,
    title: 'Футер 3-х Нитка',
    image: fabricOneImage,
    width: 'large',
  },
  {
    id: 2,
    title: 'Френч Терри',
    image: fabricTwoImage,
    width: 'small',
  },
  {
    id: 3,
    title: 'Вискоза',
    image: fabricThreeImage,
    width: 'medium',
  },
  {
    id: 4,
    title: 'Пике',
    image: fabricFourImage,
    width: 'small',
  },
  {
    id: 5,
    title: 'Кулинарная гладь',
    image: fabricFiveImage,
    width: 'medium',
  },
  {
    id: 6,
    title: 'Бифлекс',
    image: fabricSixImage,
    width: 'large',
  },
]
