import '../src/index.css'
import Script from 'next/script'

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
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2NQDF2VK76"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2NQDF2VK76');
          `}
        </Script>
      </body>
    </html>
  )
}
