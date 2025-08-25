"use client"

const BeforeAfter = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See the Difference in One Visit</h2>
          <p className="text-xl text-gray-300 mb-2">
            From cluttered garages to construction sites, our results speak for themselves.
          </p>
          <p className="text-sm text-gray-500">Actual local projects completed by J&J.</p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Before/After Set 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7511018/pexels-photo-7511018.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cluttered garage before cleanup"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Clean garage after junk removal"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  AFTER
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">Garage Cleanout</h3>
              <p className="text-gray-400 text-sm">Huntsville, AL</p>
            </div>
          </div>

          {/* Before/After Set 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7511024/pexels-photo-7511024.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Construction debris before cleanup"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4492127/pexels-photo-4492127.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Clean construction site after debris removal"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  AFTER
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">Construction Cleanup</h3>
              <p className="text-gray-400 text-sm">Arab, AL</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Your Cleanout
          </button>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
