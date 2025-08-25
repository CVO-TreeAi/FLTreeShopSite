import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Welcome from '@/components/Welcome'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceArea from '@/components/ServiceArea'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Welcome />
      <WhyChooseUs />
      <ServiceArea />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  )
}
