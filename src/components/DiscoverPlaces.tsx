import { useState } from "react";
import { Heart, Star, MapPin, Phone } from "lucide-react";
import { listings, type Listing } from "../data/travelData";
import { aboutImg } from "../assets/images";

interface ListingCardProps {
  listing: Listing;
}

function ListingCard({ listing }: ListingCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-row">
      {/* Image */}
      <div className="relative shrink-0 w-[130px] sm:w-[150px] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Heart button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
        >
          <Heart
            size={13}
            className={
              liked ? "fill-[#f84525] text-[#f84525]" : "text-gray-400"
            }
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-3 sm:p-4 flex-1 min-w-0">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          <Star size={11} className="fill-[#f84525] text-[#f84525]" />
          <span
            className="text-[#f84525] text-xs font-semibold"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            ({listing.rating})
          </span>
          <span
            className="text-gray-400 text-xs ml-1"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            {listing.reviewCount}
          </span>
        </div>

        {/* Title */}
        <h4
          className="text-gray-800 text-sm sm:text-base font-semibold mb-1 truncate"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          {listing.title}
        </h4>

        {/* Description */}
        <p
          className="text-gray-500 text-xs sm:text-sm mb-2 line-clamp-1"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          {listing.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex items-center gap-1 text-gray-500 hover:text-[#f84525] text-xs transition-colors"
            >
              <MapPin size={11} />
              <span style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
                Directions
              </span>
            </a>
            <span className="text-gray-200 hidden sm:block">|</span>
            <div className="items-center gap-1 text-gray-500 text-xs hidden sm:flex">
              <Phone size={11} />
              <span style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
                (123) 456-7890
              </span>
            </div>
          </div>
          {/* Price badge */}
          <span
            className="text-[#f84525] font-semibold text-sm"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            {listing.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export function DiscoverPlaces() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Listing Cards */}
          <div className="flex flex-col gap-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-7 lg:sticky lg:top-24">
            {/* Section Header */}
            <div>
              <span
                className="text-[#f84525] text-3xl md:text-4xl capitalize block mb-2"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
              >
                Now
              </span>
              <h2
                style={{
                  fontFamily: "'Wix Madefor Display', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                  lineHeight: 1.2,
                  color: "#191e25",
                }}
              >
                Find your perfect Place{" "}
                <span className="block">
                  based on{" "}
                  <em
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontStyle: "italic",
                    }}
                  >
                    your interest
                  </em>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              Want to have a fantastic travel experience? Let us connect you
              with diverse categories of businesses, public spots, and famous
              landmarks so that you can create unforgettable memories.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3">
              {[
                "Find popular businesses and important sites near you.",
                "Get place recommendations based on your preferences.",
                "Explore major spots and landmarks around your location.",
                "Discover diverse categories to navigate various areas.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#f84525] mt-2 shrink-0" />
                  <span
                    className="text-gray-600 text-base"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden h-[250px]">
              <img
                src={aboutImg}
                alt="Travel experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <div>
              <span
                className="text-[#f84525] text-2xl md:text-3xl capitalize block mb-3"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
              >
                Discover Your
              </span>
              <h3
                className="text-[#191e25] mb-4"
                style={{
                  fontFamily: "'Wix Madefor Display', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                }}
              >
                Favourite Place
              </h3>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#"
                className="inline-block bg-[#f84525] hover:bg-[#e03e1f] text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#f84525]/30"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
