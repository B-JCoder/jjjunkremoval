"use client"

import { Phone, Calculator, Star } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            J&J Junk Removal
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
            Tired of clutter? We make it disappear—fast, friendly, and affordable.
          </p>

          {/* Bullet Points */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 text-green-400 text-sm sm:text-base">
            <div className="flex items-center gap-2 px-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2 px-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-medium">Upfront Pricing</span>
            </div>
            <div className="flex items-center gap-2 px-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-medium">We Do All Lifting</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8 px-4">
            <a
              href="tel:256-531-7921"
              className="bg-green-500 hover:bg-green-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">Call Now: 256-531-7921</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="h-5 w-5" />
              Get Free Estimate
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Locally owned & operated</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <span>Licensed & insured</span>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <span className="text-center">1324 Wanda Dr, AL</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
