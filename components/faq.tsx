"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      question: "What items can you take?",
      answer:
        "Furniture, mattresses, appliances, electronics, yard waste, construction debris, and more. We can't take hazardous chemicals, paints, or fuels—but we'll guide you to safe disposal.",
    },
    {
      question: "Do I need to move items outside?",
      answer: "No. Just point—we handle all the lifting, inside or out.",
    },
    {
      question: "How fast can you come?",
      answer: "Often same-day or next-day in Arab, Huntsville, Albertville, Guntersville, and Cullman.",
    },
    {
      question: "How do you price?",
      answer: "Based on truck space and material. We confirm your final price upfront before any work begins.",
    },
    {
      question: "Do you recycle?",
      answer: "Yes. We recycle and donate where possible to minimize landfill waste.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-white font-semibold text-base sm:text-lg pr-4">{faq.question}</h3>
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-400 flex-shrink-0" />
                  )}
                </button>
                {openItem === index && (
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
