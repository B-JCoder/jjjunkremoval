"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Instagram, Globe } from "lucide-react"

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // You can add actual form submission logic here
    alert("Thank you for your request! We'll contact you soon.")
  }

  const services = [
    "Residential Junk Removal",
    "Commercial Cleanouts",
    "Construction Debris",
    "Appliance Removal",
    "Furniture Removal",
    "Yard Waste Removal",
    "Estate Cleanouts",
    "Hoarding Cleanup",
    "Other",
  ]

  return (
    <section className="bg-gray-900 py-12 sm:py-16 lg:py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Get Your <span className="text-green-400">Free Estimate</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">
              Ready to get started? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(214) 555-0123"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2 text-sm">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors text-sm"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black px-6 py-4 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Submit Request
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Information & Social Media */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <a href="tel:214-258-3511" className="text-green-400 hover:text-green-300 transition-colors">
                        214-258-3511
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <a
                        href="mailto:jayson@jaysezjunkremoval.com"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        jayson@jaysezjunkremoval.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-300">Red Oak, TX</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-white font-bold text-xl mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Globe className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadCapture
