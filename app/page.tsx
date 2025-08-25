import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesGrid from "@/components/services-grid"
import WhyChooseUs from "@/components/why-choose-us"
import TrustBadges from "@/components/trust-badges"
import HowItWorks from "@/components/how-it-works"
import BeforeAfter from "@/components/before-after"
import Testimonials from "@/components/testimonials"
import PricingSection from "@/components/pricing-section"
import ServiceAreas from "@/components/service-areas"
import FAQ from "@/components/faq"
import LeadCapture from "@/components/lead-capture"
import ContactBand from "@/components/contact-band"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesGrid />
      </section>
      <WhyChooseUs />
      <TrustBadges />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <BeforeAfter />
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="service-areas">
        <ServiceAreas />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <LeadCapture />
      </section>
      <CTASection />
      <ContactBand />
      <Footer />
    </div>
  )
}
