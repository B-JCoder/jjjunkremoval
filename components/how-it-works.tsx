"use client"

import { Phone, Clock, CheckCircle } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Call or Text",
      description: "Reach us at 256-531-7921 (photos welcome for a quick quote).",
    },
    {
      number: "2",
      icon: Clock,
      title: "We Arrive On Time",
      description: "Friendly crew, upfront price, no hidden fees.",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "We Haul & Sweep",
      description: "We load everything and tidy the area—done.",
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Junk Gone in 1-2-3</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                {/* Step Number Circle */}
                <div className="bg-green-500 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  {step.number}
                </div>
                {/* Connecting Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 to-gray-600 transform translate-x-8"></div>
                )}
              </div>

              <step.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Free Estimate
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
