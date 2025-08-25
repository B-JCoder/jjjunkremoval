"use client"

import { Phone, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Booking", id: "contact" },
  ]

  return (
    <div className="bg-black/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      {/* Top Utility Strip */}
      <div className="bg-green-500 text-black py-2 px-4">
        <div className="container mx-auto text-center text-xs sm:text-sm font-medium">
          Serving Arab • Huntsville • Albertville • Guntersville • Cullman
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-white">
            <img
              src="/logojjjunkremoval.png"
              alt="J&J Junk Removal Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain brightness-0 invert"
            />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">J&J Junk Removal</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-green-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-4">
            <a
              href="tel:256-531-7921"
              className="hidden lg:flex bg-green-500 hover:bg-green-600 text-black px-3 py-2 rounded-md font-semibold text-xs lg:text-sm transition-colors items-center gap-1"
            >
              <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
              Call
            </a>
            <a
              href="mailto:jhouston62612@gmail.com"
              className="hidden lg:flex bg-white hover:bg-gray-100 text-black px-3 py-2 rounded-md font-semibold text-xs lg:text-sm transition-colors items-center gap-1"
            >
              <Mail className="h-3 w-3 lg:h-4 lg:w-4" />
              Email Us
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-3 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white hover:text-green-400 transition-colors py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                <a
                  href="tel:256-531-7921"
                  className="bg-green-500 hover:bg-green-600 text-black px-4 py-3 rounded-md font-semibold text-sm transition-colors flex items-center gap-2 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="mailto:jhouston62612@gmail.com"
                  className="bg-white hover:bg-gray-100 text-black px-4 py-3 rounded-md font-semibold text-sm transition-colors flex items-center gap-2 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
