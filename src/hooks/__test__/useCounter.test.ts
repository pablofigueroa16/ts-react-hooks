import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../useCounter'
import { describe, expect, it } from 'vitest'

describe('useCounter', () => {
  it('should increment and decrement counter properly', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }))
    expect(result.current.value).toBe(0)
    act(() => {
      result.current.increment()
    })
    expect(result.current.value).toBe(1)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.value).toBe(0)
    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.value).toBe(0)
  })
})
