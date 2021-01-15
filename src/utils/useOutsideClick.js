/* eslint react-hooks/exhaustive-deps: 0 */
import { useEffect, useCallback, useRef } from 'react'

function useOutsideClick(ref, handler, when = true) {
  const savedHandler = useRef(handler)

  const memoizedCallback = useCallback((e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      savedHandler.current(e)
    }
  }, [])

  useEffect(() => {
    savedHandler.current = handler
  })
  useEffect(
    // eslint-disable-next-line
    () => {
      if (when) {
        document.addEventListener('click', memoizedCallback)
        document.addEventListener('ontouchstart', memoizedCallback)
        return () => {
          document.removeEventListener('click', memoizedCallback)
          document.removeEventListener('ontouchstart', memoizedCallback)
        }
      }
    },
    [ref, handler, when],
  )
}

export default useOutsideClick
