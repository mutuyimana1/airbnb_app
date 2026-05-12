import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookings } from "../hooks/useBookings";
import { BookingCard } from "../components/BookingsGrid";
import { BookingsTable } from "../components/BookingsTable";
import { Button } from "@/components/ui/button";

type ViewMode = "grid" | "table";

const BookingsPage = () => {
  const { bookings, isLoading, isError } = useBookings();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white mt-20">
        <div className="text-center">
          <div className="text-lg font-medium text-slate-700 mb-2">Loading your bookings...</div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Failed to load bookings</h2>
          <Button onClick={() => navigate("/listings")} className="bg-[#FF5A5F] hover:bg-[#e04f54]">
            Back to Listings
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">My Bookings</h1>
              <p className="mt-2 text-gray-500">
                {bookings.length === 0
                  ? "You haven't made any bookings yet."
                  : `You have ${bookings.length} booking${bookings.length !== 1 ? "s" : ""}.`}
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  viewMode === "table"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-50 rounded-full p-6 mb-6">
              <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-500 mb-6 max-w-md">
              Start exploring amazing properties and make your first booking.
            </p>
            <Button
              onClick={() => navigate("/listings")}
              className="bg-[#FF5A5F] hover:bg-[#e04f54] text-white px-8 py-3"
            >
              Browse Listings
            </Button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <BookingCard booking={booking} key={booking.id} />
            ))}
          </div>
        ) : (
          <BookingsTable bookings={bookings} />
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
