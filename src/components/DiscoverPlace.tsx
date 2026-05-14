import { useNavigate } from "react-router-dom";

export default function DiscoverPlaces() {
  const navigate = useNavigate();
  const places = [
    {
      id: 1,
      title: "The Barber's Lounge",
      image:
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop',
      icon: '✂️',
    },
    {
      id: 2,
      title: 'Gaming Expo Spectacle',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
      icon: '🎮',
    },
    {
      id: 3,
      title: 'Green Mart Apartment',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      icon: '🏠',
    },
    {
      id: 4,
      title: 'Chujhal Hotel And Restaurant',
      image:
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
      icon: '🍽️',
    },
  ]

  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-2 block text-[28px] italic text-[#ff5a36] font-medium">
            Places
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0f172a]">
            Discover Your Favourite Place
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-500">
            Discover exciting categories.
            <span className="text-[#ff5a36] font-medium">
              {' '}
              Find what you're looking for.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Discount Tags */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  <span className="w-fit rounded-md bg-[#ff5a36] px-3 py-1 text-xs font-semibold text-white shadow-md">
                    10% OFF
                  </span>

                  <span className="w-fit rounded-md bg-[#ff5a36] px-3 py-1 text-xs font-semibold text-white shadow-md">
                    $100 off $399·eblvc
                  </span>
                </div>

                {/* Top Right Icons */}
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-[#ff5a36] hover:text-white">
                    ❤
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-[#ff5a36] hover:text-white">
                    🔍
                  </button>
                </div>

                {/* Bottom Floating Icon */}
                <div className="absolute bottom-[-22px] right-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5a36] text-xl text-white shadow-xl ring-4 ring-white">
                    {place.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-6 pt-7">
                <div className="mb-3 flex items-center gap-2 text-sm">
                  <span className="text-[#ff5a36]">★</span>
                  <span className="font-semibold text-[#ff5a36]">(4.5)</span>
                  <span className="text-gray-400">2,391 reviews</span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-gray-800 transition group-hover:text-[#ff5a36]">
                  {place.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 transition hover:border-[#ff5a36] hover:bg-[#ff5a36] hover:text-white">
            ←
          </button>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-gray-800"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>

          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 transition hover:border-[#ff5a36] hover:bg-[#ff5a36] hover:text-white">
            →
          </button>
        </div>
        <button onClick={()=>navigate("/listings")} className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Listings
              </button>
      </div>
    </section>
  )
}
