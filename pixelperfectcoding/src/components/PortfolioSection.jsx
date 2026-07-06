import { Link } from 'react-router-dom'

function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="container-shell pb-20">
      <h2 className="section-heading">Portfolio</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const imageSrc = project.image
            ? new URL(`../assets/${project.image}`, import.meta.url).href
            : undefined

          return (
            <article
              key={project.name}
              className="glass-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              {imageSrc ? (
                <div className="h-48 overflow-hidden md:h-40">
                  <img
                    src={imageSrc}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <div className="p-6">
                <h3 className="mt-2 text-2xl text-purple-500 font-semibold">{project.name}</h3>
                <p className="text-lg mt-3">{project.desc}</p>
                <div className="mt-4">
                  <Link to="/quotation" className="text-sm text-accent hover:underline">
                    Get a quote for this project
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PortfolioSection
