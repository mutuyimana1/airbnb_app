import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookings } from "../hooks/useBookings";
import { BookingCard } from "../components/BookingsGrid";
import { Button } from "@/components/ui/button";
import { Grid2X2, List } from "lucide-react";
import BookingTable from "@/components/dashboard/components/BookingTable";

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
      <div>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="mt-2 text-gray-500">
                {bookings.length === 0
                  ? "You haven't made any bookings yet."
                  : ""}
              </p>
            </div>

          </div>
        </div>
        
            {/* View Toggle */}
             <div className="flex items-center right-0 mb-1 gap-4 justify-end mr-4">
              <button className={`p-2 flex gap-2 rounded`}>
                <List
                  onClick={() => setViewMode("table")}
                  size={35}
                  className={`hover:bg-gray-100 p-2 rounded-md ${viewMode === "grid" ? "text-primary" : "bg-orange-50 text-orange-500"}`}
                />

                <Grid2X2
                  onClick={() => setViewMode("grid")}
                  size={35}
                  className={`hover:bg-gray-100 p-2 rounded-md ${viewMode === "table" ? "text-primary" : "bg-orange-50 text-orange-500"}`}
                />
              </button>
            </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto px-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookings.map((booking) => (
              <BookingCard booking={booking} key={booking.id} />
            ))}
          </div>
        ) : (
          <BookingTable bookings={bookings} />
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
