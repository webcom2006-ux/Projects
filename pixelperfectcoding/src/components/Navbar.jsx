'use client'

import Link from 'next/link'
import {
  FaBars,
  FaEnvelope,
  FaFileAlt,
  FaImages,
  FaLayerGroup,
  FaConciergeBell,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa'
import { navLinks, services } from '../data/portfolioData'

const iconMap = {
  'About Us': FaInfoCircle,
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
    <Link href={link.href} className={className} onClick={onNavigate}>
      {content}
    </Link>
  )
}

function ServicesNavItem({ mobile = false, onNavigate }) {
  const linkClassName = 'inline-flex items-center gap-2 transition hover:text-white focus-visible:text-white'
  const serviceLinkClassName = mobile
    ? 'block rounded-lg px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white'
    : 'block rounded-lg px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white'

  return (
    <li className={mobile ? '' : 'group relative'}>
      <a href="/#services" className={`${linkClassName} ${mobile ? 'px-3 py-3' : ''}`} onClick={onNavigate}>
        <FaConciergeBell className="h-4 w-4 text-accent" aria-hidden="true" />
        <span>Services</span>
      </a>
      <ul
        className={
          mobile
            ? 'mt-1 border-l border-white/10 pl-3'
            : 'invisible absolute left-1/2 top-full z-[110] w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-slate-950/95 p-2 opacity-0 shadow-xl backdrop-blur-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100'
        }
      >
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`} className={serviceLinkClassName} onClick={onNavigate}>
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

function Navbar({ menuOpen, onMenuOpenChange }) {
  const closeMenu = () => onMenuOpenChange(false)

  const linkClassName =
    'group inline-flex items-center gap-2 transition hover:text-white focus-visible:text-white'

  return (
    <header className="sticky top-0 z-[100] overflow-visible border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between overflow-visible">
        <Link
          href="/"
          className="inline-flex items-center gap-2 tracking-[0.1em] text-slate-100 transition hover:text-white"
          onClick={closeMenu}
        >
          <img
            src="/ppc_logo.svg"
            alt="Pixel Perfect Coding logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            link.label === 'Services' ? (
              <ServicesNavItem key={link.href} />
            ) : (
              <li key={link.href}>
                <NavLinkItem link={link} className={linkClassName} />
              </li>
            )
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
              link.label === 'Services' ? (
                <ServicesNavItem key={link.href} mobile onNavigate={closeMenu} />
              ) : (
                <li key={link.href}>
                  <NavLinkItem
                    link={link}
                    className={`${linkClassName} w-full rounded-lg px-3 py-3 hover:bg-white/5`}
                    onNavigate={closeMenu}
                  />
                </li>
              )
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
