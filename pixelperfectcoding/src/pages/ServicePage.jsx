import { Link, useParams } from 'react-router-dom'

function ServicePage({ services }) {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <section className="container-shell py-24 text-center">
        <h1 className="text-4xl font-semibold text-white">Service not found</h1>
        <p className="mt-4 text-slate-400">The service you are looking for is not available.</p>
        <Link to="/#services" className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 font-semibold text-slate-950">
          Browse services
        </Link>
      </section>
    )
  }

  const imageSrc = service.image
    ? new URL(`../assets/${service.image}`, import.meta.url).href
    : undefined
  const isScalableDevelopment = service.slug === 'scalable-frontend-web-development'

  return (
    <article className="container-shell py-12 sm:py-20">
      <Link to="/#services" className="text-sm font-semibold text-accent transition hover:text-white">
        ← Back to services
      </Link>

      <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/80 via-slate-950/80 to-fuchsia-950/70 shadow-soft">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={service.title}
              className={isScalableDevelopment ? 'h-[450px] w-full object-cover' : 'h-64 w-full object-cover md:h-full md:min-h-[360px]'}
            />
          ) : null}
          <div className={isScalableDevelopment ? 'p-7 sm:p-8' : 'p-7 sm:p-12'}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Our service</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{service.description}</p>
            <Link
              to="/quotation"
              className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 font-semibold text-slate-950 transition hover:brightness-110"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="glass-card mt-12 p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Why choose this service</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">{service.detailHeading}</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">{service.detailText}</p>
      </section>
    </article>
  )
}

export default ServicePage
