import { lazy, Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ContactSection from './components/ContactSection'
import { projects, services, stacks, testimonials } from './data/portfolioData'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import HomePage from './pages/HomePage'
const ContactPage = lazy(() => import('./pages/ContactPage'))
const QuotationPage = lazy(() => import('./pages/QuotationPage'))
const AboutPage = lazy(() => import('./pages/About'))

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showContactWidget, setShowContactWidget] = useState(false)

  return (
    <div className="relative overflow-x-hidden">
      <a
        href="#main-content"
        className="absolute left-2 top-2 z-50 -translate-y-14 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />

      <main id="main-content" className='main-content'>
        <Suspense fallback={<div className="container-shell py-32 text-center">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  services={services}
                  projects={projects}
                  stacks={stacks}
                  testimonials={testimonials}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/quotation" element={<QuotationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {!showContactWidget ? (
        <button
          type="button"
          onClick={() => setShowContactWidget(true)}
          className="fixed bottom-5 right-5 z-[60] rounded-full border border-violet-400/40 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_0_25px_rgba(167,139,250,0.3)] transition hover:scale-[1.02]"
        >
          Enquiry with us
        </button>
      ) : (
        <div className="fixed bottom-24 right-5 z-[60] w-[min(92vw,480px)] rounded-3xl border border-white/15 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Enquiry with us</p>
              <p className="text-xs text-slate-400">Share your details and we’ll get back to you.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowContactWidget(false)}
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close enquiry form"
            >
              ×
            </button>
          </div>
          <ContactSection floating />
        </div>
      )}
      <div className="fixed bottom-20 right-5 z-[60]">
        <ScrollToTopButton menuOpen={menuOpen} onScrollToTop={() => setMenuOpen(false)} />
      </div>
    </div>
  )
}

export default App
