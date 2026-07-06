import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function HeroSection() {
  return (
    <section className="relative isolate bg-hero-radial pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Fast, Scalable &amp; High-Performance Web Experiences
          </motion.h1>
          <p className="mt-6 max-w-xl text-xl text-slate-300">
            Helping startups and enterprises build modern, responsive, and performance-driven frontend applications with a strong focus on page speed optimization, Core Web Vitals, and seamless user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Work
            </a>
            <Link
              to="/contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-white/40"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-2 block h-[320px] w-full max-w-[520px] sm:h-[360px] lg:h-[400px]"
          aria-hidden="true"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-slate-950/50 shadow-2xl">
            <motion.img
              src={image1}
              alt="Hero visual"
              className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[3rem] object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.96, 1, 1, 1.02, 1.02] }}
              transition={{ duration: 9, ease: 'easeInOut', times: [0, 0.05, 0.25, 0.3, 1], repeat: Infinity }}
            />
            <motion.img
              src={image2}
              alt="Hero visual"
              className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[3rem] object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.96, 0.96, 1, 1, 1.02] }}
              transition={{ duration: 9, ease: 'easeInOut', times: [0, 0.3, 0.35, 0.55, 1], repeat: Infinity }}
            />
            <motion.img
              src={image3}
              alt="Hero visual"
              className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[3rem] object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: [0, 0, 0, 1, 1], scale: [0.96, 0.96, 0.96, 1, 1.02] }}
              transition={{ duration: 9, ease: 'easeInOut', times: [0, 0.55, 0.6, 0.8, 1], repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
