import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'

function HomePage({ services, projects, skills, testimonials }) {
  return (
    <>
      <HeroSection />
      <AboutSection skills={skills} />
      <ServicesSection services={services} />
      <PortfolioSection projects={projects} />
      {/* <TestimonialsSection testimonials={testimonials} /> */}
    </>
  )
}

export default HomePage
