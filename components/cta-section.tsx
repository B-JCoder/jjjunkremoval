import { Phone, MessageCircle } from "lucide-react"

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Reclaim Your Space?</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Get your free estimate today and let us handle the heavy lifting. Same-day service available!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:256-531-7921"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Call Now: 256-531-7921
          </a>
          <a
            href="sms:256-531-7921"
            className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors flex items-center gap-2 border-2 border-white/20"
          >
            <MessageCircle className="h-5 w-5" />
            Text for Quick Quote
          </a>
        </div>
        <p className="text-green-100 mt-4 text-sm">Available 7 days a week • Free estimates • Fully insured</p>
      </div>
    </section>
  )
}

export default CTASection
