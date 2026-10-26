import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight === 0) {
        setScrollProgress(0)
        return
      }
      const scroll = (totalScroll / windowHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, scroll)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}
