import { MapPin } from "lucide-react"

const ServiceAreas = () => {
  const areas = ["Arab", "Huntsville", "Albertville", "Guntersville", "Cullman"]

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">North Alabama Coverage</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Proudly serving Arab, Huntsville, Albertville, Guntersville, and Cullman. If you're nearby, give us a
            call—we'll do our best to help.
          </p>

          {/* Service Areas */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
            <MapPin className="h-8 w-8 text-green-400 mx-auto mb-6" />
            <div className="flex flex-wrap justify-center gap-4">
              {areas.map((area, index) => (
                <span
                  key={index}
                  className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-semibold border border-green-400/30"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Check Availability Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
