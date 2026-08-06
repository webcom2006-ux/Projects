import { FaCheckCircle, FaUserTie, FaLaptopCode, FaLifeRing, FaTachometerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="rounded-2xl bg-gradient-to-r from-sky-800 via-sky-800 to-indigo-800 text-white p-6 sm:p-12 mb-10 shadow-lg">
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
            <p className="mt-4 text-lg max-w-prose opacity-90">
              At <strong>Pixel Perfect Coding</strong>, we're more than a web development company—we're your frontend
              engineering partner. We help startups, digital agencies, and growing businesses build, improve, and maintain
              modern web applications that are fast, scalable, and built for long-term success.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-800 px-5 py-2 rounded-md font-semibold shadow hover:opacity-95">Get in touch</Link>
              <Link to="/quotation" className="inline-flex items-center gap-2 border border-white/30 px-5 py-2 rounded-md text-white hover:bg-white/5">Request a quote</Link>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-96">
            <div className="rounded-xl bg-white/10 p-6">
              <h4 className="text- font-bold">What Makes Us Different</h4>
              <p className="mt-2 text-base opacity-90">We focus on long-term engineering partnerships that prioritize quality, maintainability, and measurable results.</p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-white/90 mt-1" />
                  <span className='text-base'>Frontend-first engineering expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-white/90 mt-1" />
                  <span  className='text-base'>Scalable architecture and maintainable code</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-white/90 mt-1" />
                  <span  className='text-base'>Performance-driven development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <article>
          <h2 className="text-4xl font-semibold mb-3 text-sky-400">Who We Are?</h2>
          <p className="text-gray-400 mb-4 text-base">We work alongside your team to deliver reliable solutions that create real business value. Whether you're launching a new product, scaling an existing platform, or modernizing a legacy application, we bring practical engineering leadership to help you move faster.</p>

          <h3 className="text-2xl font-medium mb-2 text-sky-400">Our Niche Expertise</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/5 dark:bg-slate-800/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-600 text-white">
                  <FaLaptopCode className="h-5 w-5" />
                </span>
                <h4 className="font-semibold text-slate-300 dark:text-slate-100">Frontend Engineering Consulting</h4>
              </div>
              <p className="text-base text-gray-400 dark:text-slate-300 mt-3">Guidance on architecture, React best practices, design systems, and frontend scalability.</p>
            </div>

            <div className="p-4 rounded-lg bg-white/5 dark:bg-slate-800/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-600 text-white">
                  <FaLifeRing className="h-5 w-5" />
                </span>
                <h4 className="font-semibold text-slate-300 dark:text-slate-100">Ongoing Technical Support</h4>
              </div>
              <p className="text-base text-gray-400 dark:text-slate-300 mt-3">Continuous maintenance, feature enhancements, performance improvements, and troubleshooting.</p>
            </div>
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 text-sky-400">Hiring, Evaluation & Performance</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/5 dark:bg-slate-800/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-600 text-white">
                  <FaUserTie className="h-5 w-5" />
                </span>
                <h4 className="font-semibold text-slate-300 dark:text-slate-100">Frontend Hiring & Technical Evaluation</h4>
              </div>
              <p className="text-base text-gray-400 dark:text-slate-300 mt-3">Practical technical interviews and independent engineering assessments focused on real-world skills.</p>
            </div>

            <div className="p-4 rounded-lg bg-white/5 dark:bg-slate-800/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-600 text-white">
                  <FaTachometerAlt className="h-5 w-5" />
                </span>
                <h4 className="font-semibold text-slate-300 dark:text-slate-100">Performance & Core Web Vitals</h4>
              </div>
              <p className="text-base text-gray-400 dark:text-slate-300 mt-3">Optimization of loading speed, responsiveness, accessibility, and Core Web Vitals for better UX and SEO.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-sky-400">Why Businesses Partner With Us</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            'Frontend-first engineering expertise',
            'Scalable architecture and maintainable code',
            'Long-term technical support',
            'Independent frontend hiring assistance',
            'Performance-driven development',
            'Transparent communication and collaboration',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 bg-white/5 p-3 rounded-md">
              <FaCheckCircle className="text-sky-400 mt-1" />
              <span className="text-gray-400 dark:text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-3 text-sky-400">Let's Build Better Frontend Experiences</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">Whether you need expert consulting, ongoing engineering support, independent frontend interview evaluations, or a trusted partner to improve your digital products, Pixel Perfect Coding is here to help.</p>
          <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-sky-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-sky-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Start a conversation
          </Link>
          <Link
            to="/quotation"
            className="border border-sky-600 text-sky-600 px-6 py-3 rounded-md font-semibold hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-700 dark:hover:text-sky-300 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Request a proposal
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
