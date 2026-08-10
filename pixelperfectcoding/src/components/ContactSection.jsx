import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  mobile: '',
  message: '',
}

function ContactSection({ floating = false }) {
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
      //const response = await fetch('http://localhost:3001/api/send-email', {
      const response = await fetch('/api/send-email', {
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

  const formContent = (
    <form
      className={
        floating
          ? 'mt-4 grid w-full grid-cols-1 gap-3'
          : 'mt-4 grid gap-3 md:[grid-template-columns:1fr_1fr_0.6fr]'
      }
      aria-label="Contact form"
      onSubmit={handleSubmit}
    >
      <label className={`text-sm ${floating ? 'w-full' : 'md:col-span-1'}`}>
        <span className="mb-2 block font-semibold text-slate-300">Name</span>
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
      <label className={`text-sm ${floating ? 'w-full' : 'md:col-span-1'}`}>
        <span className="mb-2 block font-semibold text-slate-300">Email</span>
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
      <label className={`text-sm ${floating ? 'w-full' : 'md:col-span-1 md:max-w-[220px]'}`}>
        <span className="mb-2 block font-semibold text-slate-300">Mobile Number</span>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          autoComplete="tel"
          className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
        />
      </label>
      <label className={`text-sm ${floating ? 'w-full' : 'md:col-span-3'}`}>
        <span className="mb-2 block font-semibold text-slate-300">Message</span>
        <textarea
          name="message"
          rows={floating ? 4 : 5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
        />
      </label>
      <button
        type="submit"
        disabled={status.type === 'loading'}
        className={`rounded-xl bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] ${floating ? 'w-full' : 'w-fit md:col-span-3'}`}
      >
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status.type !== 'idle' && (
        <p
          className={`text-sm ${floating ? 'w-full' : 'md:col-span-3'} ${
            status.type === 'error' ? 'text-rose-300' : 'text-emerald-300'
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  )

  if (floating) {
    return <div className="w-full">{formContent}</div>
  }

  return (
    <section id="contact" className="container-shell pb-24 main-content-othr">
      <div className="glass-card p-8 md:p-10">
        <h2 className="section-heading">Contact Us</h2>
        {formContent}
      </div>
    </section>
  )
}

export default ContactSection
