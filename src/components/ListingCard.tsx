// components/ListingCard.tsx

import { Heart, MapPin, Phone, Star, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Listing } from "@/types";
interface ListingCardProps {
  listing: Listing;
  saved: boolean;
  onToggleSave: () => void;
}

const ListingCard = ({ listing, saved, onToggleSave }: ListingCardProps) => {
  const navigate = useNavigate();
  const imageSrc =
    listing.photos?.[0]?.url ||
    listing.img ||
    "https://via.placeholder.com/640x360?text=No+image";
  const description = listing.description || "No description available.";
  const priceLabel = listing.pricePerNight
    ? `$${listing.pricePerNight} / night`
    : listing.price
      ? `$${listing.price} / night`
      : "$-- / night";

  return (
    <div className="bg-white rounded-[14px] overflow-hidden border border-[#ececec] shadow-sm hover:shadow-md transition-all duration-300">
      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={imageSrc}
          alt={listing.title}
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* favorite */}
        <button
          onClick={onToggleSave}
          className={`absolute top-4 left-4 w-10 h-10 rounded-full border border-white/50 backdrop-blur-sm flex items-center justify-center transition ${
            saved ? "bg-[#FF5A5F]" : "bg-black/20"
          }`}
        >
          <Heart
            size={16}
            className={saved ? "fill-white text-white" : "text-white"}
          />
        </button>

        {/* badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          <div className="bg-black/55 text-white text-[11px] px-3 py-1 rounded font-medium">
            Featured ★
          </div>

          <div className="bg-white/90 text-[#666] text-[11px] px-3 py-1 rounded font-semibold">
            {priceLabel}
          </div>
        </div>

        {/* category icon */}
        <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-full bg-[#FF5A5F] flex items-center justify-center shadow-lg border-4 border-white">
          <Store className="text-white" size={18} />
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="px-6 pt-8 pb-5 cursor-alias"
        onClick={() => navigate(`/properties/${listing.id}`)}
      >
        <div className="flex justify-end items-center text-[#FF5A5F] text-sm mb-3">
          <span>{listing.ratings?.length ?? 0} reviews</span>
          <Star size={14} className="fill-[#FF5A5F] ml-1" />
        </div>

        <h3 className="text-[28px] leading-tight font-semibold text-[#222] mb-3">
          {listing.title}
        </h3>

        <p className="mb-4 text-sm text-[#555] leading-6 max-h-16 overflow-hidden">
          {description}
        </p>

        <div className="flex items-center justify-between text-[#555] text-sm mb-5">
          <div className="flex items-center gap-1">
            <MapPin size={15} />
            <span>{listing.location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Phone size={15} />
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
