// components/ListingsCard.tsx

import { Gamepad2, Heart, Home, Scissors, Star, UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/images/90219fa30ce211f3bdb2f2c69f62ce40056e8ef4 copy.png"
import type { Listing } from "@/types";
interface ListingCardProps {
  listing: Listing;
  saved: boolean;
  onToggleSave: () => void;
}

const ListingsCard = ({ listing, saved, onToggleSave }: ListingCardProps) => {
  const navigate = useNavigate();
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

  return (
      <div
              key={listing.id}
              className=" bg-white rounded-xl border border-gray-200 overflow-hidden shrink-0 group"
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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave();
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${
                      saved
                        ? "bg-[#FF5A5F] text-white"
                        : "bg-white hover:bg-[#ff5a2c] hover:text-white"
                    }`}
                  >
                    <Heart size={16} fill={saved ? "currentColor" : "none"} />
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
              <div className="px-5 pt-7 pb-6 cursor-pointer" onClick={() => navigate(`/properties/${listing.id}`)}>
                <div className="flex items-center gap-1 text-[#ff5a2c] text-sm">
                  <Star size={14} fill="currentColor" />
                  <span className="font-semibold">
                    {listing.rating?.toFixed(1) || 0}
                  </span>
                  <span className="text-gray-500">
                     reviews
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold text-gray-800 leading-snug ">
                  {listing.title}
                </h3>
              </div>
            </div>
  );
};

export default ListingsCard;
