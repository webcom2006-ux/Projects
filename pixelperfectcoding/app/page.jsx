import App from '../src/App'
import HomePage from '../src/site-pages/HomePage'
import { projects, services, stacks } from '../src/data/portfolioData'

export default function Page() {
  return (
    <App>
      <HomePage services={services} projects={projects} stacks={stacks} />
    </App>
  )
}
