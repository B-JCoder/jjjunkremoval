import { Phone, Mail, MapPin } from "lucide-react"

const ContactBand = () => {
  return (
    <section className="bg-green-500 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6">
            Speak to a real person in minutes.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-black">
            <a
              href="tel:256-531-7921"
              className="flex items-center gap-2 bg-black text-green-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">256-531-7921</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <div className="hidden sm:block w-px h-6 sm:h-8 bg-black/20"></div>

            <a
              href="mailto:jhouston62612@gmail.com"
              className="flex items-center gap-2 hover:text-gray-700 transition-colors text-sm sm:text-base"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">jhouston62612@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>

            <div className="hidden sm:block w-px h-6 sm:h-8 bg-black/20"></div>

            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4" />
              1324 Wanda Dr, AL
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBand
