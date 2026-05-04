function AboutSection({ skills }) {
  return (
    <section id="skills" className="container-shell py-10">
      <div className="glass-card p-8 md:p-10">
        <h2 className="section-heading">Skills</h2>
        <p className="mt-5 max-w-3xl text-slate-300">
          17+ years of experience in frontend engineering, scalable
          architecture, accessibility, and performance optimization.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
