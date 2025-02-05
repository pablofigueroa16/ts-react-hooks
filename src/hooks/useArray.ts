import * as React from 'react'

interface UseArray<T> {
  value: T[]
  add: (item: T) => void
  remove: (index: number) => void
  clear: () => void
  isEmpty: boolean
}

export const useArray = <T>(initialValue: T[] = []): UseArray<T> => {
  const [value, setValue] = React.useState<T[]>(initialValue)

  const add = (item: T): void => {
    setValue((prev) => [...prev, item])
  }

  const remove = (index: number): void => {
    setValue((prev) => prev.filter((_, i) => i !== index))
  }

  const clear = (): void => {
    setValue([])
  }

  const isEmpty = value.length === 0

  return { value, add, remove, clear, isEmpty }
}
