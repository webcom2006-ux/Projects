function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="container-shell pb-20">
      <h2 className="section-heading">Testimonials</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.author} className="glass-card p-6">
            <p className="text-slate-200">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-5 text-sm text-cyan-200">{item.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
