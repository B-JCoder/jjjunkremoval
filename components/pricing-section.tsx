import { DollarSign, Gift, Users, Phone } from "lucide-react"

const PricingSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Free, no-obligation estimates",
    },
    {
      icon: Gift,
      title: "Bundle discounts for multi-item pickups",
    },
    {
      icon: Users,
      title: "Senior & military friendly",
    },
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Pricing is based on space used in our truck and material type. You'll always get a final price before we
              start—no surprises.
            </p>
          </div>

          {/* Pricing Features */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-medium">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="tel:256-531-7921"
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Call for a Quick Quote — 256-531-7921
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
