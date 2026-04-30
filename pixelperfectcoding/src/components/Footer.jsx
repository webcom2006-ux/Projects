import { Link } from 'react-router-dom'

const footerLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/santosh-kumar-b6a02023/',
    external: true,
  }
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Pixel Perfect Coding. All rights reserved.
        </p>

        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quotation" className="transition hover:text-white">
                Quotation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
