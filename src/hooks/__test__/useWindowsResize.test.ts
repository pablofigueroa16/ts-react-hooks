import { fireEvent, renderHook } from '@testing-library/react'
import { useWindowsResize } from '../useWindowsResize'
import { expect, it, describe, beforeEach, vi } from 'vitest'

describe('useWindowsResize', () => {
  beforeEach(() => {
    global.innerHeight = 1024
    global.innerWidth = 600
  })
  it('should instance windows object', () => {
    const { result } = renderHook(() => useWindowsResize())
    expect(result.current).toStrictEqual({ width: 600, height: 1024 })
  })
  it('should update on windows resize', () => {
    const { result } = renderHook(() => useWindowsResize())
    global.innerHeight = 900
    global.innerWidth = 502
    fireEvent(window, new Event('resize'))
    expect(result.current).toStrictEqual({ width: 502, height: 900 })
  })
  it('should clean up event listener', () => {
    const { unmount } = renderHook(() => useWindowsResize())
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    expect(addEventListenerSpy).toBeDefined()
    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalled()
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    )
  })

  it('should return correct initial window dimensions', () => {
    // Set custom window dimensions
    const testWidth = 800
    const testHeight = 600
    global.innerWidth = testWidth
    global.innerHeight = testHeight

    const { result } = renderHook(() => useWindowsResize())

    expect(result.current).toEqual({
      width: testWidth,
      height: testHeight,
    })
  })
})
