import { Star, Clock, DollarSign, Recycle } from "lucide-react"

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "★★★★★",
      subtitle: "Super fast and hassle-free.",
    },
    {
      icon: Clock,
      title: "On-Time Arrival",
      subtitle: "Guarantee",
    },
    {
      icon: DollarSign,
      title: "Transparent",
      subtitle: "No-Surprise Pricing",
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      subtitle: "Recycle/Donate when possible",
    },
  ]

  return (
    <section className="bg-black/50 backdrop-blur-sm py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center border border-white/10 hover:border-green-400/50 transition-all duration-300"
            >
              <badge.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-white font-bold text-base sm:text-lg mb-1">{badge.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-tight">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
