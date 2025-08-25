import { MapPin, Clock, Truck, Recycle, Users } from "lucide-react"

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Local & Reliable",
      description: "Alabama-owned and community-trusted",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Same-day or next-day service available",
    },
    {
      icon: Truck,
      title: "Full Service",
      description: "We lift, load, and sweep",
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      description: "Recycle/donate whenever possible",
    },
    {
      icon: Users,
      title: "Friendly Crew",
      description: "Professional, respectful, and careful",
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The J&J Advantage</h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center"
            >
              <advantage.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{advantage.title}</h3>
              <p className="text-gray-300">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Pickup
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
