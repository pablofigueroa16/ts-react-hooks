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

  it('should pass arguments to the callback', () => {
    const mockCallback = vi.fn()
    const { result } = renderHook(() => useEvent(mockCallback))
    act(() => {
      result.current('arg1', 'arg2')
    })
    expect(mockCallback).toHaveBeenCalledWith('arg1', 'arg2')
  })

  it('should handle updated callback references', () => {
    const initialCallback = vi.fn()
    const updatedCallback = vi.fn()
    const { result, rerender } = renderHook(
      ({ callback }) => useEvent(callback),
      { initialProps: { callback: initialCallback } },
    )
    act(() => {
      result.current()
    })
    expect(initialCallback).toHaveBeenCalledOnce()
    expect(updatedCallback).not.toHaveBeenCalled()

    rerender({ callback: updatedCallback })
    act(() => {
      result.current()
    })
    expect(updatedCallback).toHaveBeenCalledOnce()
  })

  it('should return a stable reference across renders', () => {
    const mockCallback = vi.fn()
    const { result, rerender } = renderHook(() => useEvent(mockCallback))
    const firstCallback = result.current
    rerender()
    const secondCallback = result.current
    expect(firstCallback).toBe(secondCallback)
  })
})
