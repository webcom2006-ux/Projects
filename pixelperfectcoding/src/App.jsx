import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { projects, services, skills, testimonials } from './data/portfolioData'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import QuotationPage from './pages/QuotationPage'

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <a
        href="#main-content"
        className="absolute left-2 top-2 z-50 -translate-y-14 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                services={services}
                projects={projects}
                skills={skills}
                testimonials={testimonials}
              />
            }
          />
          <Route path="/quotation" element={<QuotationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
