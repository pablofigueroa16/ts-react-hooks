import * as React from 'react'

interface UseToggle {
  value: boolean
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

export const useToggle = (initialValue = false): UseToggle => {
  const [value, setValue] = React.useState<boolean>(initialValue)

  const toggle = () => setValue((prev) => !prev)
  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)

  return { value, toggle, setTrue, setFalse }
}
