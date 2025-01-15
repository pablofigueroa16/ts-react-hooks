import { fireEvent, renderHook } from '@testing-library/react'
import { useWindowsResize } from '../useWindowsResize'
import { expect, it, describe, beforeEach } from 'vitest'

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
})
