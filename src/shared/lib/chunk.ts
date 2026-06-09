export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (size <= 0) {
    return [items.slice()]
  }

  const result: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size))
  }

  return result
}
