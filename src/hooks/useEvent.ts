import * as React from 'react'

export function useEvent<T extends (...args: unknown[]) => unknown>(
  callback: T,
): T {
  const ref = React.useRef(callback)

  React.useEffect(() => {
    ref.current = callback
  }, [callback])

  return React.useCallback(
    (...args: Parameters<T>): ReturnType<T> =>
      (ref.current as T)(...args) as ReturnType<T>,
    [],
  ) as T
}
