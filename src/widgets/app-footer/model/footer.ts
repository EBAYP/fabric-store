import instagramIcon from '@/shared/assets/icons/instagram.svg'
import telegramIcon from '@/shared/assets/icons/telegram.svg'
import vkIcon from '@/shared/assets/icons/vk.svg'
import whatsappIcon from '@/shared/assets/icons/whatsapp.svg'
import { footerInformationLinks, footerNavigationLinks } from '@/shared/config'

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface FooterSection {
  title: string
  links: typeof footerNavigationLinks
}

export const footerNavigationSections: FooterSection[] = [
  { title: 'Навигация', links: footerNavigationLinks },
  { title: 'Информация', links: footerInformationLinks },
]

export const socialLinks: SocialLink[] = [
  { label: 'VK', href: 'https://vk.com', icon: vkIcon },
  { label: 'WhatsApp', href: 'https://wa.me', icon: whatsappIcon },
  { label: 'Telegram', href: 'https://t.me', icon: telegramIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: instagramIcon },
]
