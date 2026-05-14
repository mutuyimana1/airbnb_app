import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import type { Booking } from "@/types";
import { useState, useEffect } from "react";
import { List, Grid2X2 } from "lucide-react";
import BookingTable from "../components/BookingTable";

export const DashboardBookings = () => {
  const { data: bookings = [], isLoading, error } = useQuery<Booking[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/bookings");
      return data;
    },
  });

  const [view, setView] = useState<'grid' | 'list'>('list');

  // Load view from localStorage on mount
  useEffect(() => {
    const savedView = localStorage.getItem('dashboardBookingsView') as 'grid' | 'list' | null;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  // Save view to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('dashboardBookingsView', view);
  }, [view]);

  if (isLoading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Failed to load bookings</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          All Bookings
        </h2>
        <p className="mt-2 text-gray-600">
          View and manage your bookings
        </p>
        <div className="flex items-center gap-2">
          <button className={`p-2 flex gap-2 rounded`}>
            <List
              onClick={() => setView("list")}
              size={35}
              className={`hover:bg-gray-100 p-2 rounded-md ${view === "grid" ? "text-primary" : "bg-orange-50 text-orange-500"}`}
            />

            <Grid2X2
              onClick={() => setView("grid")}
              size={35}
              className={`hover:bg-gray-100 p-2 rounded-md ${view === "list" ? "text-primary" : "bg-orange-50 text-orange-500"}`}
            />
          </button>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No bookings found</p>
        </div>
      ) : (
        view === 'grid' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <div key={booking.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {booking.listing?.title || "Property"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(booking.checkIn).toLocaleDateString()} -{" "}
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      booking.status === "CONFIRMED"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <BookingTable bookings={bookings} />
          </div>
        )
      )}
    </div>
  );
};