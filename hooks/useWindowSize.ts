import { useEffect, useState } from 'react'

interface Size {
  width: number | undefined
  height: number | undefined
  isPortrait: boolean
  isLandscape: boolean
}

export default function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
    isLandscape: false,
    isPortrait: false,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isLandscape: window.innerHeight <= window.innerWidth,
        isPortrait: window.innerWidth <= window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
