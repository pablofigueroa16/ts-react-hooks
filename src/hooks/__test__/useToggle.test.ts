import { act, renderHook } from '@testing-library/react'
import { useToggle } from '../useToggle'
import { describe, expect, it } from 'vitest'

describe('useToggle', () => {
  it('should initialize with default value (false)', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current.value).toBe(false)
  })

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useToggle(true))
    expect(result.current.value).toBe(true)
  })

  it('should toggle value correctly', () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => {
      result.current.toggle()
    })
    expect(result.current.value).toBe(true)

    act(() => {
      result.current.toggle()
    })
    expect(result.current.value).toBe(false)
  })

  it('should set true and false correctly', () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => {
      result.current.setTrue()
    })
    expect(result.current.value).toBe(true)

    act(() => {
      result.current.setFalse()
    })
    expect(result.current.value).toBe(false)
  })
})
