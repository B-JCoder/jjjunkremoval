"use client"

import { Trash2, Hammer, PartyPopper, Zap, HardHat, Phone } from "lucide-react"

const ServicesGrid = () => {
  const services = [
    {
      icon: Trash2,
      title: "Junk Removal",
      description: "Furniture, mattresses, electronics, garage cleanouts, yard waste.",
      cta: "Book Junk Pickup",
    },
    {
      icon: Hammer,
      title: "Demolition Cleanup",
      description: "Post-demo debris cleared quickly and safely.",
      cta: "Clear My Debris",
    },
    {
      icon: PartyPopper,
      title: "Event Cleanup",
      description: "After-party/event cleanups with rapid turnaround.",
      cta: "Clean My Venue",
    },
    {
      icon: Zap,
      title: "Appliance Removal",
      description: "Fridges, washers, dryers, stoves—heavy lifting included.",
      cta: "Remove My Appliance",
    },
    {
      icon: HardHat,
      title: "Construction Cleanup",
      description: "Drywall, lumber, shingles—keep your site clean & safe.",
      cta: "Keep Site Clean",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            What We Take Care Of
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Homes, businesses, job sites, and events—we handle messes of every size.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mb-4 sm:mb-6" />
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
              <button
                onClick={scrollToContact}
                className="bg-green-500 hover:bg-green-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 w-full text-sm sm:text-base"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 inline-block border border-white/10">
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Prefer to call?</p>
            <a
              href="tel:256-531-7921"
              className="text-green-400 hover:text-green-300 font-bold text-lg sm:text-xl flex items-center gap-2 justify-center transition-colors"
            >
              <Phone className="h-5 w-5" />
              256-531-7921
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
