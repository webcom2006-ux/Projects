import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ServicesSection({ services }) {
  return (
    <section id="services" className="container-shell py-8 pb-20">
      <h2 className="section-heading">Services That Blend Design, Speed & Scalability</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const imageSrc = service.image
            ? new URL(`../assets/${service.image}`, import.meta.url).href
            : undefined

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="shrink-0 overflow-hidden rounded-2xl bg-slate-900/80 ring-1 ring-white/10 md:w-28 md:h-28 w-full h-44">
                  {imageSrc ? (
                    <img
                      alt={service.title}
                      src={imageSrc}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl text-purple-500 font-semibold">{service.title}</h3>
                  <p className="mt-3 text-slate-300">{service.description}</p>
                </div>
              </div>
              <div className="mt-5 h-1 w-14 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-24 group-hover:bg-accent" />
              <div className="mt-4 flex justify-end">
                <Link
                  to="/quotation"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-105"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
