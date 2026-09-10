import App from '../../src/App'
import ContactPage from '../../src/site-pages/ContactPage'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Pixel Perfect Coding for frontend engineering, technical consulting, web development, and performance support.',
}

export default function Page() {
  return (
    <App>
      <ContactPage />
    </App>
  )
}
