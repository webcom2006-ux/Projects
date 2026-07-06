import { Link } from 'react-router-dom'
import { FaEnvelope, FaFileAlt, FaImages, FaLayerGroup, FaConciergeBell } from 'react-icons/fa'
import { navLinks } from '../data/portfolioData'
import logo from "../assets/logo-hr-light.png";

const iconMap = {
  'Technology Stacks': FaLayerGroup,
  Services: FaConciergeBell,
  Portfolio: FaImages,
  Quotation: FaFileAlt,
  Testimonials: FaFileAlt,
  Contact: FaEnvelope,
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide text-slate-100">
          <img src={logo} alt="Logo" className="brand-logo inline-block h-8 w-auto mr-2 align-middle" />
        </Link>
        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => {
            const LinkIcon = iconMap[link.label]
            const content = (
              <>
                {LinkIcon ? <LinkIcon className="h-4 w-4 text-accent" aria-hidden="true" /> : null}
                <span>{link.label}</span>
              </>
            )

            const isHashAnchor = link.href.startsWith('#') || link.href.startsWith('/#')

            return (
              <li key={link.href}>
                {isHashAnchor ? (
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white focus-visible:text-white"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white focus-visible:text-white"
                  >
                    {content}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
