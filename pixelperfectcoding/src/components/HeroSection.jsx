import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/heroSlides'

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const activeSlide = heroSlides[activeIndex]

  return (
    <section className="relative isolate bg-hero-radial pb-20 pt-16 md:pb-28 md:pt-14">
      <div className="container-shell">
        <div className="mb-8 flex justify-start">
          <h1 className="inline-flex items-center rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-400/20 via-sky-400/15 to-slate-900/80 px-5 py-2.5 text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.16)] sm:text-xl">
            Your Frontend Consulting Partner
          </h1>
        </div>
        <motion.div
          key={activeSlide.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div> 
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              {activeSlide.heading}
            </motion.h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={activeSlide.ctaHref}
                className="rounded-xl bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {activeSlide.ctaText}
              </a> 
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-2xl backdrop-blur">
            <img
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              className="h-[360px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-lg font-semibold uppercase tracking-[0.3em] text-accent">
                Why this works
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {activeSlide.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-2" aria-label="Hero carousel navigation">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.heading}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? 'bg-accent' : 'bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
