import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logojjjunkremoval.png"
                  alt="J&J Junk Removal Logo"
                  className="h-12 w-12 object-contain brightness-0 invert"
                />
                <h3 className="text-white font-bold text-xl">J&J Junk Removal</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Fast, reliable junk removal for homes & businesses across North Alabama. We handle the heavy lifting so
                you don't have to.
              </p>
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
                <span className="text-gray-400 text-sm ml-2">Locally owned & operated</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:256-531-7921"
                  className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">256-531-7921</span>
                </a>
                <a
                  href="mailto:jhouston62612@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">jhouston62612@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">1324 Wanda Dr, AL</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Available 7 Days a Week</span>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Service Areas</h4>
              <div className="space-y-2">
                {["Arab", "Huntsville", "Albertville", "Guntersville", "Cullman"].map((city) => (
                  <div
                    key={city}
                    className="text-gray-300 text-sm hover:text-green-400 transition-colors cursor-pointer"
                  >
                    {city}, AL
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">© 2025 J&J Junk Removal. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Powered by The Linkage Digital.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <span className="text-gray-500">Licensed & Insured</span>
              <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
              <span className="text-gray-500">Same-Day Service Available</span>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-4 sm:hidden text-center">
            <a
              href="tel:256-531-7921"
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now: 256-531-7921
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
