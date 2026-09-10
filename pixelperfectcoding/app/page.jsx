import App from '../src/App'
import HomePage from '../src/site-pages/HomePage'
import { projects, services, stacks } from '../src/data/portfolioData'

export const metadata = {
  title: 'Frontend Engineering, Your Frontend Consulting Partner & Web Development',
  description:
    'Build faster, scalable digital experiences with frontend engineering, UI/UX design, e-commerce, and performance expertise.',
}

export default function Page() {
  return (
    <App>
      <HomePage services={services} projects={projects} stacks={stacks} />
    </App>
  )
}
