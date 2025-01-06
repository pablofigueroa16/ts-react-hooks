import * as React from 'react'

interface UseCounterProps {
  initialValue?: number
}

interface UseCounter {
  value: number
  increment: (num?: number) => void
  decrement: (num?: number) => void
  reset: () => void
}

export const useCounter = ({ initialValue }: UseCounterProps): UseCounter => {
  const [value, setValue] = React.useState<number>(initialValue || 0)

  const increment = (num = 1): void => setValue((prev) => prev + num)
  const decrement = (num = 1): void => setValue((prev) => prev - num)
  const reset = () => setValue(initialValue || 0)

  return { value, increment, decrement, reset }
}
