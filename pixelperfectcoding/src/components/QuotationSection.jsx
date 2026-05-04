import { useMemo, useState } from 'react'

function QuotationSection({ services }) {
  const [formData, setFormData] = useState({
    service: services[0]?.title ?? '',
    pages: 5,
    complexity: 'medium',
    timeline: 'standard',
    includeSeo: true,
    includeAccessibility: true,
    includeCwv: true,
  })

  const quote = useMemo(() => {
    const selected = services.find((item) => item.title === formData.service)
    const basePrice = selected?.basePrice ?? 0

    const complexityMultiplier =
      formData.complexity === 'high' ? 1.35 : formData.complexity === 'low' ? 0.9 : 1
    const timelineMultiplier = formData.timeline === 'express' ? 1.25 : 1
    const pageFactor = Math.max(1, Number(formData.pages) / 5)

    const seoAddon = formData.includeSeo ? 250 : 0
    const accessibilityAddon = formData.includeAccessibility ? 300 : 0
    const cwvAddon = formData.includeCwv ? 350 : 0

    const subtotal = basePrice * complexityMultiplier * timelineMultiplier * pageFactor
    const total = Math.round(subtotal + seoAddon + accessibilityAddon + cwvAddon)

    return {
      total,
      breakdown: {
        base: basePrice,
        seo: seoAddon,
        accessibility: accessibilityAddon,
        cwv: cwvAddon,
      },
    }
  }, [formData, services])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <section id="quotation" className="container-shell pb-20 main-content-othr">
      <div className="glass-card p-8 md:p-10">
        <h2 className="section-heading">Quotation</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Get an instant budget estimate for the selected service based on scope,
          complexity, and delivery timeline.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form className="grid gap-4" aria-label="Quotation form">
            <label className="text-sm">
              <span className="mb-2 block text-slate-300">Service</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-slate-300">Estimated pages/screens</span>
              <input
                type="number"
                min="1"
                max="50"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
              />
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-slate-300">Complexity</span>
              <select
                name="complexity"
                value={formData.complexity}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-slate-300">Timeline</span>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
              >
                <option value="standard">Standard (3-6 weeks)</option>
                <option value="express">Express (1-3 weeks)</option>
              </select>
            </label>

            <div className="grid gap-2 pt-2 text-sm text-slate-200">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="includeSeo"
                  checked={formData.includeSeo}
                  onChange={handleChange}
                />
                SEO setup
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="includeAccessibility"
                  checked={formData.includeAccessibility}
                  onChange={handleChange}
                />
                Accessibility audit
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="includeCwv"
                  checked={formData.includeCwv}
                  onChange={handleChange}
                />
                Core Web Vitals tuning
              </label>
            </div>
          </form>

          <aside className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Estimated Investment</h3>
            <p className="mt-2 text-sm text-slate-300">
              This is a planning estimate. Final quote depends on discovery and
              technical requirements.
            </p>
            <p className="mt-6 text-4xl font-bold text-cyan-200">${quote.total}</p>

            <ul className="mt-6 grid gap-2 text-sm text-slate-300">
              <li>Base: ${quote.breakdown.base}</li>
              <li>SEO: ${quote.breakdown.seo}</li>
              <li>Accessibility: ${quote.breakdown.accessibility}</li>
              <li>Core Web Vitals: ${quote.breakdown.cwv}</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default QuotationSection
