import App from '../../../src/App'
import ServicePage from '../../../src/site-pages/ServicePage'
import { services } from '../../../src/data/portfolioData'

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export default async function Page({ params }) {
  const { slug } = await params

  return (
    <App>
      <ServicePage services={services} slug={slug} />
    </App>
  )
}
