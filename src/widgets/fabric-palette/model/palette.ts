export interface PaletteColor {
  id: number
  name: string
  color: string
}

export const mainPaletteColors: PaletteColor[] = [
  { id: 1, name: 'A-104 Dark Grey', color: '#848381' },
  { id: 2, name: 'A-101 Grey', color: '#dadada' },
  { id: 3, name: 'A-115 White', color: '#ffffff' },
  { id: 4, name: 'A-123 Black', color: '#000004' },
  { id: 5, name: 'A-106 Dark Blue', color: '#263669' },
  { id: 6, name: 'A-107 Blue', color: '#4a7ab8' },
  { id: 7, name: 'A-118 Light Blue', color: '#94b7d5' },
  { id: 8, name: 'A-135 Orange', color: '#fc8b23' },
  { id: 9, name: 'A-136 Green', color: '#007c7a' },
  { id: 10, name: 'A-125 Yellow', color: '#f5dc41' },
  { id: 11, name: 'A-201 Purple', color: '#b5a0c9' },
  { id: 12, name: 'A-100 Red', color: '#b2092c' },
]

export const seasonalPaletteColors: PaletteColor[] = mainPaletteColors.map((color) => ({
  ...color,
  id: color.id + mainPaletteColors.length,
}))
