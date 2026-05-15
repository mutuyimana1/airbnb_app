import React, { useRef } from "react";
import {
  Heart,
  Home,
  UtensilsCrossed,
  Gamepad2,
  Scissors,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";
import { useListings } from "@/features/listings/hooks/useListings";
import defaultImage from "../assets/images/90219fa30ce211f3bdb2f2c69f62ce40056e8ef4 copy.png"

const DiscoverPlacesSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { data: listings, isLoading, isError } = useListings();

  // Limit to 10 listings
  const limitedListings = listings?.slice(0, 10) || [];

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 360;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Map listing type to icon
  const getIconForType = (type?: string) => {
    switch (type?.toLowerCase()) {
      case "home":
        return <Home size={18} />;
      case "hotel":
        return <UtensilsCrossed size={18} />;
      case "restaurant":
        return <UtensilsCrossed size={18} />;
      case "gaming":
        return <Gamepad2 size={18} />;
      case "barbershop":
        return <Scissors size={18} />;
      default:
        return <Home size={18} />;
    }
  };

  if (isLoading) {
    return (
      <section className="w-full bg-[#f4f4f4] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#ff5a2c] text-2xl italic font-medium">
              Places
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#111827]">
              Discover Your Favourite Place
            </h2>
            <p className="mt-4 text-gray-500 text-sm md:text-base">
              Discover exciting categories.{" "}
              <span className="text-[#ff5a2c] font-medium">
                Find what you're looking for.
              </span>
            </p>
          </div>
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full border-4 border-t-[#ff5a2c] border-b-transparent w-12 h-12"></div>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-full bg-[#f4f4f4] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#ff5a2c] text-2xl italic font-medium">
              Places
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#111827]">
              Discover Your Favourite Place
            </h2>
            <p className="mt-4 text-gray-500 text-sm md:text-base">
              Discover exciting categories.{" "}
              <span className="text-[#ff5a2c] font-medium">
                Find what you're looking for.
              </span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-red-500">
              Failed to load places. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#f4f4f4] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#ff5a2c] text-2xl italic font-medium">
            Places
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#111827]">
            Discover Your Favourite Place
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            Discover exciting categories.{" "}
            <span className="text-[#ff5a2c] font-medium">
              Find what you're looking for.
            </span>
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {limitedListings.map((listing) => (
            <div
              key={listing.id}
              className="min-w-[320px] md:min-w-[340px] bg-white rounded-xl border border-gray-200 overflow-hidden shrink-0 group"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={
                    listing.img ||
                    listing.photos?.[0]?.url ||
                    defaultImage
                  }
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Discount */}
                <div className="absolute top-5 left-4 flex flex-col gap-2">
                  <span className="bg-[#ff5a2c] text-white text-xs font-semibold px-3 py-1 rounded">
                    {listing.pricePerNight}/ Night
                  </span>

                  <span className="bg-[#ff5a2c] text-white text-xs font-semibold px-3 py-1 rounded">
                    {listing.guests} Guests
                  </span>
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#ff5a2c] hover:text-white transition">
                    <Heart size={16} />
                  </button>
                </div>

                {/* Floating Icon */}
                <div className="absolute -bottom-5 right-6">
                  <div className="w-14 h-14 rounded-full bg-[#ff5a2c] text-white flex items-center justify-center shadow-lg">
                    {getIconForType(listing.type)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pt-7 pb-6">
                <div className="flex items-center gap-1 text-[#ff5a2c] text-sm">
                  <Star size={14} fill="currentColor" />
                  <span className="font-semibold">
                    {listing.rating?.toFixed(1) || 0}
                  </span>
                  <span className="text-gray-500">
                     reviews
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold text-gray-800 leading-snug">
                  {listing.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#ff5a2c] hover:text-white transition"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#ff5a2c] hover:text-white transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
         <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Listings
              </button>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default DiscoverPlacesSection;
