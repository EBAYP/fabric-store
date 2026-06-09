import certificateOneImage from '@/shared/assets/images/certificate-iso-9001-quality-management.png'
import certificateTwoImage from '@/shared/assets/images/certificate-oeko-tex-100-safety.png'
import certificateThreeImage from '@/shared/assets/images/certificate-gost-russia-compliance.png'

export const certificates = [
  { id: 1, image: certificateOneImage },
  { id: 2, image: certificateTwoImage },
  { id: 3, image: certificateThreeImage },
]

export const certificateSlides = [
  ...certificates,
  ...certificates.map((certificate) => ({
    ...certificate,
    id: certificate.id + certificates.length,
  })),
]
