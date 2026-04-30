import { motion } from 'framer-motion'

function ServicesSection({ services }) {
  return (
    <section id="services" className="container-shell py-8 pb-20">
      <h2 className="section-heading">Services</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group p-6"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-slate-300">{service.description}</p>
            <div className="mt-5 h-1 w-14 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-24 group-hover:bg-accent" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
