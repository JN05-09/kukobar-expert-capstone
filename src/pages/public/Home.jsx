import '../../styles/Home.css'
import NavbarSection from './components/NavbarSection'
import HeroSection from './components/HeroSection'
import DesignsSection from './components/DesignsSection'
import ServicesSection from './components/ServicesSection'
import TechniciansSection from './components/TechniciansSection'
import CtaSection from './components/CtaSection'
import FooterSection from './components/FooterSection'

export default function Home() {
  return (
    <div className="kuko-home">
      <NavbarSection />
      <HeroSection />
      <DesignsSection />
      <ServicesSection />
      <TechniciansSection />
      <CtaSection />
      <FooterSection />
    </div>
  )
}