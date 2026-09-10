import '../src/index.css'

export const metadata = {
  title: 'Pixel Perfect Coding',
  description: 'Frontend engineering, web development, and performance consulting.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
