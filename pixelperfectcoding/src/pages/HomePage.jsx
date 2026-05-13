import TechStacksSection from '../components/TechStacksSection'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'
import ServicesSection from '../components/ServicesSection'
function HomePage({ services, projects, stacks }) {
  return (
    <>
      <HeroSection />
      <TechStacksSection stacks={stacks} />
      <ServicesSection services={services} />
      <PortfolioSection projects={projects} />
      {/* <TestimonialsSection testimonials={testimonials} /> */}

    </>
  )
}

export default HomePage
