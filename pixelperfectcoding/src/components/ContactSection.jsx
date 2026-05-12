import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({
    type: 'idle',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your message...' })

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send email')
      }

      setStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent successfully.',
      })
      setFormData(initialForm)
    } catch (error) {
      console.error('Send error:', error)
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="container-shell pb-24 main-content-othr">
      <div className="glass-card p-8 md:p-10">
        <h2 className="section-heading">Contact</h2>
        <form
          className="mt-8 grid gap-5 md:grid-cols-2"
          aria-label="Contact form"
          onSubmit={handleSubmit}
        >
          <label className="text-sm md:col-span-1">
            <span className="mb-2 block text-slate-300">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
            />
          </label>
          <label className="text-sm md:col-span-1">
            <span className="mb-2 block text-slate-300">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
            />
          </label>
          <label className="text-sm md:col-span-2">
            <span className="mb-2 block text-slate-300">Message</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
            />
          </label>
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-fit rounded-xl bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] md:col-span-2"
          >
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status.type !== 'idle' && (
            <p
              className={`text-sm md:col-span-2 ${
                status.type === 'error' ? 'text-rose-300' : 'text-emerald-300'
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
