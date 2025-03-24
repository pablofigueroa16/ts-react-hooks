import * as React from 'react'
export function useEvent(callback) {
  // useRef + useCallback
  const ref = React.useRef(() => {})
  React.useEffect(() => {
    ref.current = callback
  }, [callback])

  return React.useCallback((...args) => ref.current(...args), [])
}
