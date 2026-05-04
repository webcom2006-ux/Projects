import { Link } from 'react-router-dom'
import logo from "../assets/logo-hr-light.png";


const homeLinks = [
  { label: 'Skills', href: '/#skills' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
 /*  { label: 'Testimonials', href: '/#testimonials' }, */
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide text-slate-100">
          <img src={logo} alt="Logo" className="brand-logo inline-block h-8 w-auto mr-2 align-middle" />
        </Link>
        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {homeLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-white focus-visible:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/quotation"
              className="transition hover:text-white focus-visible:text-white"
            >
              Quotation
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition hover:text-white focus-visible:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
