export interface NavigationLink {
  label: string
  to: string
}

export const primaryNavigationLinks: NavigationLink[] = [
  { label: 'Главная', to: '/' },
  { label: 'Каталог', to: '/catalog' },
  { label: 'О компании', to: '/about' },
  { label: 'Новости', to: '/news' },
  { label: 'Доставка и оплата', to: '/delivery' },
  { label: 'Контакты', to: '/contacts' },
]

export const footerNavigationLinks: NavigationLink[] = [
  { label: 'Каталог', to: '/catalog' },
  { label: 'О компании', to: '/about' },
  { label: 'Новости', to: '/news' },
  { label: 'Доставка и оплата', to: '/delivery' },
  { label: 'Контакты', to: '/contacts' },
  { label: 'Корзина', to: '/cart' },
]

export const footerInformationLinks: NavigationLink[] = [
  { label: 'Помощь', to: '/help' },
  { label: 'Блог', to: '/blog' },
  { label: 'Вопрос-ответ', to: '/faq' },
  { label: 'Политика конфиденциальности', to: '/privacy' },
  { label: 'Карта сайта', to: '/sitemap' },
]
