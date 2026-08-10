import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const SCROLL_THRESHOLD = 600

function ScrollToTopButton({ menuOpen = false, onScrollToTop }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= SCROLL_THRESHOLD)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onScrollToTop?.()
  }

  const visible = scrolled || menuOpen

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-slate-950 shadow-glow transition hover:scale-105 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <FaArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default ScrollToTopButton
