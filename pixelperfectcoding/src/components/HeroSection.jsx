import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function HeroSection() {
  return (
    <section className="relative isolate bg-hero-radial pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-cyan-200"
          >
            Frontend Architect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Fast, Scalable &amp; High-Performance Web Experiences
          </motion.h1>
          <p className="mt-6 max-w-xl text-xl text-slate-300">
            Frontend Architect with expertise in React.js, Next.js, Performance
            Engineering, and Scalable UI Architecture.
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
          className="relative mx-auto mt-2 hidden h-[320px] w-full max-w-[420px] sm:block lg:h-[360px] lg:max-w-[460px]"
          aria-hidden="true"
        >
         <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-8 top-10 h-24 w-24 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-indigo-300/40 to-blue-500/10 shadow-glow lg:left-10 lg:h-28 lg:w-28"
          >
            <img
              src={image2}
              alt="Card Image"
              className="w-full h-full object-cover rounded-[inherit]"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-6 top-20 h-16 w-16 rounded-full bg-cyan-300/30 blur-[1px] lg:right-8 lg:h-20 lg:w-20"
          />
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute bottom-8 left-8 h-32 w-40 overflow-hidden rounded-[2rem] border-white/20 bg-white/10 lg:bottom-10 lg:left-12 lg:h-36 lg:w-48"
          >
            <img
              src={image3}
              alt="Card Image"
              className="w-full h-full object-cover"
            />
        </motion.div>
          <div className="glass-card absolute right-8 top-24 h-40 w-40 rounded-[2rem] border-white/20 bg-gradient-to-tr from-indigo-500/20 via-white/10 to-cyan-300/15 lg:right-12 lg:top-28 lg:h-48 lg:w-48">
            <img 
              alt="Logo" 
              src={image1}
              className="w-full h-full object-cover rounded-[inherit]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
