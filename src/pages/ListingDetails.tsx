// --- Types ---
interface Amenity {
  name: string;
  icon: React.ReactNode;
}

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useListing } from "@/features/listings/hooks/useListing";
import {
  Star,
  Grid,
  Heart,
  ExternalLink,
  Tv,
  Waves,
  UtensilsCrossed,
  Flower2,
  X,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import defaultImage from "../assets/images/90219fa30ce211f3bdb2f2c69f62ce40056e8ef4 copy.png"
import { BookingForm } from "@/features/bookings";

type RouteParams = {
  listingId: string;
};

export default function ExactListingPage() {
  const { listingId } = useParams<RouteParams>();
  const navigate = useNavigate();

  const { data: listing, isLoading, isError } = useListing(listingId);

  const [openBookingModal, setOpenBookingModal] = useState(false);

  const photoUrls =
    listing?.photos?.map((photo) => photo.url).filter(Boolean) ?? [];

  const primaryImage =
    photoUrls[0] || defaultImage;

  const secondaryImage = photoUrls[1] || primaryImage;

  const tertiaryImage = photoUrls[2] || primaryImage;


  const rawAmenities =
    listing?.amenities?.length && listing.amenities.length > 0
      ? listing.amenities
      : listing?.emenities?.length
        ? listing.emenities
        : [];

  const amenities: Amenity[] = rawAmenities.length
    ? rawAmenities.map((name) => ({
        name,
        icon: <Flower2 size={16} />,
      }))
    : [
        { name: "Television", icon: <Tv size={16} /> },
        { name: "Shared Pool", icon: <Waves size={16} /> },
        { name: "Kitchen Appliances", icon: <UtensilsCrossed size={16} /> },
        { name: "Jacuzzi", icon: <Waves size={16} /> },
      ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg font-semibold text-gray-700">
          Loading listing details...
        </div>
      </div>
    );
  }

  if (isError || !listing) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl p-10 shadow-lg text-center max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Listing not found
          </h2>

          <p className="text-gray-500 text-sm">
            The listing you are looking for does not exist or may have been
            removed.
          </p>

          <Button
            className="mt-6 bg-[#FF5A5F] hover:bg-[#ff454b]"
            onClick={() => navigate("/listings")}
          >
            Back to listings
          </Button>
        </div>
      </div>
    );
  }

  const ratingCount = listing.ratings?.length ?? 2391;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 mt-20">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          {/* LEFT */}
          <div>
            <button className="flex items-center gap-2 text-[15px] text-gray-700 font-medium">
              Save this listing <Heart size={16} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="lg:text-right">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {listing.title}
            </h1>

            <div className="flex flex-wrap lg:justify-end items-center gap-3 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#FF5A5F]">
                  reviews {ratingCount}
                </span>

                <span className="text-[#FF5A5F] font-semibold">
                  ({listing.rating || "4.5"})
                </span>

                <div className="flex text-[#FFB400]">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <ExternalLink size={15} />
              </div>

              <span className="text-gray-400">/</span>

              <span className="text-gray-700">
                {listing.type || "Restaurant"}
              </span>

              <span className="text-gray-400">/</span>
            </div>

            <div className="flex flex-wrap lg:justify-end items-center gap-3 mt-3 text-sm text-gray-500">
            

              <span>
                <MapPin size={14} className="inline mr-1" />
                {listing.location || "San Francisco 1123"}
              </span>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-4">
          {/* LEFT IMAGES */}
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden rounded-[24px] h-[260px]">
              <img
                src={primaryImage}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-[24px] h-[260px]">
              <img
                src={secondaryImage}
                alt={listing.title}
                className="w-full h-full object-cover"
              />

              <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-md hover:bg-gray-100 transition">
                View photos
                <Grid size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-[24px] h-[536px]">
            <img
              src={tertiaryImage}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16 mt-16">
          {/* LEFT */}
          <div className="space-y-8">
              <BookingForm listingId={listingId!} />

            {/* OPENING HOURS */}
            {/* <div className="border border-gray-100 rounded-[28px] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-900">
                  Opening{" "}
                  <span className="text-[#FF5A5F] italic font-normal">
                    Hours
                  </span>
                </h3>

                <Clock3 size={24} />
              </div>

              <div className="space-y-5">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Sunday",
                ].map((day) => (
                  <div
                    key={day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-400">
                      am 6:00 pm 8:00
                    </span>

                    <span className="font-semibold text-gray-700">
                      {day}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#FF5A5F] font-bold">
                    Closed
                  </span>

                  <span className="font-semibold text-gray-700">
                    Suturday
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT */}
          <div>
            {/* REVIEWS */}
            <div>
              <div className="flex justify-end">
                <h2 className="text-4xl font-bold text-gray-900">
                  Latest Property{" "}
                  <span className="text-[#FF5A5F] italic font-normal">
                    Reviews
                  </span>
                </h2>
              </div>

              <div className="mt-10 text-gray-600 leading-[2] text-right">
                <p>{listing.description}</p>
              </div>
            </div>

            {/* AMENITIES */}
            <div className="mt-20">
              <div className="flex justify-end border-b pb-5 mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                  Amenities{" "}
                  <span className="text-[#FF5A5F] italic font-normal">
                    Available
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-end gap-3"
                  >
                    <span className="text-gray-500 font-medium text-sm">
                      {item.name}
                    </span>

                    <div className="text-gray-900">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOOKING MODAL */}
      <Dialog
        open={openBookingModal}
        onOpenChange={setOpenBookingModal}
      >
        <DialogContent className="max-w-2xl rounded-[28px] p-0 overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setOpenBookingModal(false)}
              className="absolute right-5 top-5 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <X size={18} />
            </button>

            <div className="p-8 md:p-10">
              <DialogHeader className="mb-8">
                <DialogTitle className="text-3xl font-bold text-gray-900">
                  Book {listing.title}
                </DialogTitle>

                <p className="text-gray-500 text-sm mt-2">
                  Complete your reservation details below.
                </p>
              </DialogHeader>

              {/* KEEPING BACKEND BOOKING FORM */}
              <BookingForm listingId={listingId!} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}