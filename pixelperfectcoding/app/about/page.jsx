import App from '../../src/App'
import AboutPage from '../../src/site-pages/AboutPage'

export const metadata = {
  title: 'About Us',
  description:
    'Learn how Pixel Perfect Coding helps teams build maintainable, accessible, and high-performance frontend experiences.',
}

export default function Page() {
  return (
    <App>
      <AboutPage />
    </App>
  )
}
