import { Link } from 'react-router-dom'
import {
  FaBars,
  FaEnvelope,
  FaFileAlt,
  FaImages,
  FaLayerGroup,
  FaConciergeBell,
  FaTimes,
} from 'react-icons/fa'
import { navLinks } from '../data/portfolioData'

const iconMap = {
  'Technology Stacks': FaLayerGroup,
  Services: FaConciergeBell,
  Portfolio: FaImages,
  Quotation: FaFileAlt,
  Testimonials: FaFileAlt,
  Contact: FaEnvelope,
}

function NavLinkItem({ link, className, onNavigate }) {
  const LinkIcon = iconMap[link.label]
  const isHashAnchor = link.href.startsWith('#') || link.href.startsWith('/#')

  const content = (
    <>
      {LinkIcon ? <LinkIcon className="h-4 w-4 text-accent" aria-hidden="true" /> : null}
      <span>{link.label}</span>
    </>
  )

  if (isHashAnchor) {
    return (
      <a href={link.href} className={className} onClick={onNavigate}>
        {content}
      </a>
    )
  }

  return (
    <Link to={link.href} className={className} onClick={onNavigate}>
      {content}
    </Link>
  )
}

function Navbar({ menuOpen, onMenuOpenChange }) {
  const closeMenu = () => onMenuOpenChange(false)

  const linkClassName =
    'group inline-flex items-center gap-2 transition hover:text-white focus-visible:text-white'

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-2 font-semibold tracking-[0.2em] text-slate-100 transition hover:text-white"
          onClick={closeMenu}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-fuchsia-400/20 text-fuchsia-300 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_16px_rgba(217,70,239,0.25)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
          </span>
          <span className="log-text-fs text-[0.95rem] uppercase text-fuchsia-300">Pixel Perfect Coding</span>
        </Link>

        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLinkItem link={link} className={linkClassName} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition hover:border-white/20 hover:text-white md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => onMenuOpenChange((open) => !open)}
        >
          {menuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-slate-950/95 shadow-lg backdrop-blur-xl md:hidden"
        >
          <ul className="container-shell flex flex-col gap-1 py-4 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLinkItem
                  link={link}
                  className={`${linkClassName} w-full rounded-lg px-3 py-3 hover:bg-white/5`}
                  onNavigate={closeMenu}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
