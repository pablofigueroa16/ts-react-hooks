import { act, renderHook } from '@testing-library/react'
import { useArray } from '../useArray'
import { describe, expect, it } from 'vitest'

describe('useArray', () => {
  it('should initialize with empty array by default', () => {
    const { result } = renderHook(() => useArray())
    expect(result.current.value).toEqual([])
    expect(result.current.isEmpty).toBe(true)
  })

  it('should initialize with provided array', () => {
    const initialArray = [1, 2, 3]
    const { result } = renderHook(() => useArray(initialArray))
    expect(result.current.value).toEqual(initialArray)
    expect(result.current.isEmpty).toBe(false)
  })

  it('should add items correctly', () => {
    const { result } = renderHook(() => useArray<number>())

    act(() => {
      result.current.add(1)
    })
    expect(result.current.value).toEqual([1])

    act(() => {
      result.current.add(2)
    })
    expect(result.current.value).toEqual([1, 2])
  })

  it('should remove items correctly', () => {
    const { result } = renderHook(() => useArray([1, 2, 3]))

    act(() => {
      result.current.remove(1)
    })
    expect(result.current.value).toEqual([1, 3])
  })

  it('should clear array correctly', () => {
    const { result } = renderHook(() => useArray([1, 2, 3]))

    act(() => {
      result.current.clear()
    })
    expect(result.current.value).toEqual([])
    expect(result.current.isEmpty).toBe(true)
  })
})
