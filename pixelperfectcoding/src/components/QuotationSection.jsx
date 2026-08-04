import { useMemo, useState } from 'react'

function QuotationSection({ services }) {
  const enabledAddonServiceTitles = useMemo(
    () => services.slice(0, 2).map((service) => service.title),
    [services],
  )

  const disabledScopeServiceTitles = useMemo(
    () => services.slice(-2).map((service) => service.title),
    [services],
  )

  const [formData, setFormData] = useState({
    service: services[0]?.title ?? '',
    pages: 5,
    complexity: 'medium',
    timeline: 'standard',
    includeSeo: true,
    includeAccessibility: true,
    includeCwv: true,
  })

  const addonsDisabled = !enabledAddonServiceTitles.includes(formData.service)
  const scopeFieldsDisabled = disabledScopeServiceTitles.includes(formData.service)
  const showScopeFields = !scopeFieldsDisabled
  const showFeatureOptions = !addonsDisabled

  const quote = useMemo(() => {
    const selected = services.find((item) => item.title === formData.service)
    const basePrice = selected?.basePrice ?? 0

    const complexityMultiplier = scopeFieldsDisabled
      ? 1
      : formData.complexity === 'high'
        ? 1.35
        : formData.complexity === 'low'
          ? 0.9
          : 1
    const timelineMultiplier = formData.timeline === 'express' ? 1.25 : 1
    const pageFactor = scopeFieldsDisabled ? 1 : Math.max(1, Number(formData.pages) / 5)

    const seoAddon = !addonsDisabled && formData.includeSeo ? 3500 : 0
    const accessibilityAddon = !addonsDisabled && formData.includeAccessibility ? 1500 : 0
    const cwvAddon = !addonsDisabled && formData.includeCwv ? 4500 : 0

    const subtotal = basePrice * complexityMultiplier * timelineMultiplier * pageFactor
    const regularPrice = Math.round(subtotal + seoAddon + accessibilityAddon + cwvAddon)
    const offerPrice = Math.round(regularPrice * 0.7)

    return {
      regularPrice,
      offerPrice,
      breakdown: {
        base: basePrice,
        ...(showFeatureOptions
          ? {
              seo: seoAddon,
              accessibility: accessibilityAddon,
              cwv: cwvAddon,
            }
          : {}),
      },
    }
  }, [addonsDisabled, formData, scopeFieldsDisabled, services, showFeatureOptions])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prev) => {
      const next = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }

      if (name === 'service' && !enabledAddonServiceTitles.includes(value)) {
        next.includeSeo = false
        next.includeAccessibility = false
        next.includeCwv = false
      }

      if (name === 'service' && disabledScopeServiceTitles.includes(value)) {
        next.pages = 5
        next.complexity = 'medium'
      }

      return next
    })
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
            <label className="text-base">
              <span className="mb-2 block text-slate-300">Service</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            {showScopeFields ? (
              <>
                <label className="text-base">
                  <span className="mb-2 block text-slate-300">Estimated pages/screens</span>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    name="pages"
                    value={formData.pages}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent"
                  />
                </label>

                <label className="text-base">
                  <span className="mb-2 block text-slate-300">Complexity</span>
                  <select
                    name="complexity"
                    value={formData.complexity}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </label>
              </>
            ) : null}

            {/* <label className="text-base">
              <span className="mb-2 block text-slate-300">Timeline</span>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-accent"
              >
                <option value="standard">Standard (3-6 weeks)</option>
                <option value="express">Express (1-3 weeks)</option>
              </select>
            </label> */}

            {showFeatureOptions ? (
              <div className="grid gap-2 pt-2 text-base text-slate-200">
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
                  Accessibility Enhancement
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
            ) : null}
          </form>

          <aside className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-2xl font-semibold">Estimated Investment</h3>
            <p className="mt-2 text-base text-slate-300">
              This is a planning estimate. Final quote depends on discovery and
              technical requirements.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-base text-slate-400">Regular Price</p>
                <p className="text-3xl font-semibold text-slate-400 line-through">₹{quote.regularPrice}</p>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-accent/50 bg-gradient-to-br from-accent/20 via-cyan-500/10 to-accent/5 p-5 shadow-glow">
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-bold uppercase tracking-wide text-slate-950">
                  30% off
                </span>
                <p className="text-base font-medium text-accent">Offer Price</p>
                <p className="mt-1 text-5xl font-bold text-cyan-100">₹{quote.offerPrice}</p>
                <p className="mt-2 text-sm text-slate-300">
                  You save ₹{quote.regularPrice - quote.offerPrice}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-2 text-base text-slate-300">
              <li>Base: ₹{quote.breakdown.base}</li>
              {quote.breakdown.seo !== undefined ? <li>SEO: ₹{quote.breakdown.seo}</li> : null}
              {quote.breakdown.accessibility !== undefined ? (
                <li>Accessibility: ₹{quote.breakdown.accessibility}</li>
              ) : null}
              {quote.breakdown.cwv !== undefined ? <li>Core Web Vitals: ₹{quote.breakdown.cwv}</li> : null}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default QuotationSection
