import Link from 'next/link'

const footerLinks = [
  {
    label: 'LinkedIn',
    href: '/',
    external: true,
  }
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-slate-300 md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Pixel Perfect Coding. All rights reserved.
        </p>

        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/quotation" className="transition hover:text-white">
                Quotation
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-white">
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
