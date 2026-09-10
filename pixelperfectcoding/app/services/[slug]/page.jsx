import App from '../../../src/App'
import ServicePage from '../../../src/site-pages/ServicePage'
import { services } from '../../../src/data/portfolioData'

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  return {
    title: service?.title || 'Services',
    description: service?.description || 'Explore Pixel Perfect Coding services.',
  }
}

export default async function Page({ params }) {
  const { slug } = await params

  return (
    <App>
      <ServicePage services={services} slug={slug} />
    </App>
  )
}
