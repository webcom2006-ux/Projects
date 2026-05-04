function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="container-shell pb-20">
      <h2 className="section-heading">Portfolio</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <p className="text-lg text-cyan-200">{project.tag}</p>
            <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
            <p className="mt-4 text-lg text-slate-300">
              High-impact frontend delivery focused on scalability,
              maintainability, and measurable UX outcomes.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
