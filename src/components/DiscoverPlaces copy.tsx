import { Star, Heart } from 'lucide-react';
import imgAbout from "../../imports/1920WDefault/f415136c3d07db9696128c423998468a6a4ea602.png";
import imgAbout2 from "../../imports/1920WDefault/c6465bd6ec09ebf0fb50c80a8d8362723c89e17c.png";

const listings = [
  {
    id: '1',
    title: 'Luxury Beach Resort',
    image: imgAbout,
    rating: 4.8,
    description: 'Beautiful oceanfront resort with amazing amenities',
    price: 299,
  },
  {
    id: '2',
    title: 'Mountain Retreat',
    image: imgAbout2,
    rating: 4.9,
    description: 'Peaceful mountain getaway with stunning views',
    price: 199,
  },
];

export default function DiscoverPlaces() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Listings */}
          <div className="space-y-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Image */}
                  <div className="relative sm:w-48 h-48 flex-shrink-0 overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Favorite Button */}
                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                      <Heart size={18} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                        {listing.title}
                      </h3>
                      <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-lg">
                        <Star className="text-orange-500 fill-orange-500" size={16} />
                        <span className="text-sm text-gray-900">{listing.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{listing.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-orange-500">
                        ${listing.price}
                        <span className="text-sm text-gray-500">/night</span>
                      </span>
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Marketing Content */}
          <div className="space-y-8">
            <div>
              <span className="text-orange-500 uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mt-4 mb-6">
                Discover Your Favourite Places
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We provide you with the best selection of places to visit, stay, and explore.
                Our curated listings ensure you have an unforgettable experience wherever you go.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                    <Star className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      Premium Quality
                    </h4>
                    <p className="text-gray-600">
                      All listings are verified and meet our high-quality standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                    <Heart className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      Best Prices
                    </h4>
                    <p className="text-gray-600">
                      Competitive pricing with no hidden fees or extra charges
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Listings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
