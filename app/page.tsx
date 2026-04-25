import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Clients from '@/components/sections/Clients'
import AccredianEdge from '@/components/sections/AccredianEdge'
import DomainExpertise from '@/components/sections/DomainExpertise'
import CourseSegmentation from '@/components/sections/CourseSegmentation'
import WhoShouldJoin from '@/components/sections/WhoShouldJoin'
import CATFramework from '@/components/sections/CATFramework'
import DeliveryApproach from '@/components/sections/DeliveryApproach'
import FAQ from '@/components/sections/FAQ'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <DeliveryApproach />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
