import '../src/index.css'

export const metadata = {
  title: {
    default: 'Pixel Perfect Coding | Frontend Engineering & Web Development',
    template: '%s | Pixel Perfect Coding',
  },
  description:
    'Pixel Perfect Coding provides scalable frontend web development, technical consulting, hiring evaluation, your hiring partner, UI/UX design, e-commerce solutions, and Core Web Vitals optimization.',
  keywords: [
    'frontend engineering',
    'frontend web development',
    'React development',
    'Next.js development',
    'UI UX design',
    'e-commerce solutions',
    'Core Web Vitals optimization',
    'frontend hiring evaluation',
    'technical consulting',
  ],
  authors: [{ name: 'Pixel Perfect Coding' }],
  creator: 'Pixel Perfect Coding',
  icons: {
    icon: '/fav_logo.png',
    shortcut: '/fav_logo.png',
    apple: '/fav_logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pixel Perfect Coding',
    title: 'Pixel Perfect Coding | Frontend Engineering & Web Development',
    description:
      'Scalable frontend development, UI/UX design, technical consulting, e-commerce, hiring evaluation, and performance optimization.',
  },
  twitter: {
    card: 'summary',
    title: 'Pixel Perfect Coding | Frontend Engineering & Web Development',
    description:
      'Scalable frontend development, UI/UX design, technical consulting, e-commerce, hiring evaluation, and performance optimization.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
