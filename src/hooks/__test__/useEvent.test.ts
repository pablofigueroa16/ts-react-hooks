import { act, renderHook } from '@testing-library/react'
import { useEvent } from '../useEvent'
import { describe, expect, it, vi } from 'vitest'

describe('useEvent', () => {
  it('should execute the main callback', () => {
    const mockCallback = vi.fn()
    const { result } = renderHook(() => useEvent(useEvent(mockCallback)))
    act(() => {
      result.current()
    })
    expect(mockCallback).toHaveBeenCalledOnce()
  })
  it('should memory the callback', () => {
    const mockCallback = vi.fn()
    const { result, rerender } = renderHook(() =>
      useEvent(useEvent(mockCallback)),
    )
    const callback = result.current
    rerender()
    const newCallback = result.current
    expect(callback).toStrictEqual(newCallback)
  })
})
