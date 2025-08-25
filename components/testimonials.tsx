import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Called in the morning, junk gone by lunch. Amazing!",
      author: "M. Carter",
      location: "Huntsville",
    },
    {
      quote: "Fair price and super polite crew. Highly recommend.",
      author: "J. Adams",
      location: "Arab",
    },
    {
      quote: "Left our site spotless after a demo job.",
      author: "R. Lee",
      location: "Cullman",
    },
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Your Neighbors Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-center mb-6 italic">"{testimonial.quote}"</blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="text-green-400 font-semibold">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Make My Space Clutter-Free
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
