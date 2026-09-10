import App from '../../src/App'
import QuotationPage from '../../src/site-pages/QuotationPage'

export const metadata = {
  title: 'Request a Quote',
  description:
    'Request a tailored quote for frontend development, UI/UX design, e-commerce, consulting, or Core Web Vitals optimization.',
}

export default function Page() {
  return (
    <App>
      <QuotationPage />
    </App>
  )
}
