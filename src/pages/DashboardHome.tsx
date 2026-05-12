import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import axiosInstance from "@/lib/axios";
import type { Booking, Listing } from "@/types";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";
import { AddListingModal } from "@/features/listings/components/AddListingModal";

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function DashboardHome() {
  const { user } = useAuth();
  const userRole = user?.role?.toUpperCase() === "HOST" ? "HOST" : "GUEST";
  const userName = user?.name || "Traveler";
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);

  const listingsQuery = useQuery<Listing[]>({
    queryKey: ["dashboard-listings"],
    queryFn: async () => {
      const response = await axiosInstance.get<Listing[]>("/listings");
      return response.data;
    },
    enabled: !!user,
  });

  const bookingsQuery = useQuery<Booking[]>({
    queryKey: ["dashboard-bookings", userRole],
    queryFn: async () => {
      const endpoint = userRole === "HOST" ? "/bookings" : "/bookings";

      try {
        const response = await axiosInstance.get<Booking[]>(endpoint);
        return response.data;
      } catch (error) {
        if (userRole === "HOST") {
          const response = await axiosInstance.get<Booking[]>("/bookings");
          return response.data.filter(
            (booking) => booking.listing?.hostId === user?.id,
          );
        }
        throw error;
      }
    },
    enabled: !!user,
  });

  const isLoading = listingsQuery.isLoading || bookingsQuery.isLoading;
  const listings = listingsQuery.data ?? [];
  const bookings = bookingsQuery.data ?? [];
  const hostListings = listings.filter(
    (listing: Listing) => listing.hostId === user?.id,
  );

  // Removed sectionTitle as it's not used
  const bookingLabel =
    userRole === "HOST" ? "Booking requests" : "Your bookings";
  const listingLabel = userRole === "HOST" ? "Your listings" : "Explore stays";

  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-gray-100 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900">
              Welcome back, {userName}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {userRole === "HOST"
                ? "Manage your listings and booking status in one place."
                : "Review your current bookings and discover stays for your next trip."}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-col md:items-end">
            {userRole === "HOST" && (
              <button
                onClick={() => setIsAddListingOpen(true)}
                className="flex items-center gap-2 bg-[#FF5A5F] hover:bg-[#e03e1f] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5A5F]/30"
              >
                <Plus size={18} />
                Add Listing
              </button>
            )}
            <div className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 text-right">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                Role
              </p>
              <p className="mt-3 text-3xl font-bold text-slate-900">
                {userRole}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6">
            <div className="flex items-center gap-3 text-slate-500">
              <CalendarDays size={18} />
              <p className="text-sm">Upcoming bookings</p>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {bookings.length}
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6">
            <div className="flex items-center gap-3 text-slate-500">
              <MapPin size={18} />
              <p className="text-sm">Listings tracked</p>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {userRole === "HOST" ? hostListings.length : listings.length}
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6">
            <div className="flex items-center gap-3 text-slate-500">
              <CheckCircle2 size={18} />
              <p className="text-sm">Current status</p>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              {userRole === "HOST" ? "Hosting" : "Guest"}
            </p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="rounded-[2rem] border border-gray-100 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] text-center">
          <p className="text-slate-500">Loading dashboard data...</p>
        </div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-[0.65fr_0.35fr]">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-bold text-slate-900">
                {bookingLabel}
              </h2>
              {bookings.length === 0 ? (
                <p className="mt-4 text-sm text-slate-500">
                  No bookings found yet.
                </p>
              ) : (
                <div className="mt-6 space-y-4">
                  {bookings.slice(0, 4).map((booking) => (
                    <div
                      key={booking.id}
                      className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-5"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm text-slate-500">
                            {booking.listing?.title ||
                              booking.listingId ||
                              "Listing"}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-slate-900">
                            {booking.guest?.name || "Guest"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm uppercase text-slate-500">
                            {booking.status || "Pending"}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-slate-900">
                            {booking.totalPrice
                              ? `$${booking.totalPrice}`
                              : "--"}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-500">
                        {formatDate(booking.checkIn)} -{" "}
                        {formatDate(booking.checkOut)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  {listingLabel}
                </h2>
                <Button variant="secondary" size="sm">
                  View all
                </Button>
              </div>
              {!listings.length ? (
                <p className="mt-4 text-sm text-slate-500">
                  No listings available yet.
                </p>
              ) : (
                <div className="mt-6 grid gap-4">
                  {(userRole === "HOST" ? hostListings : listings)
                    .slice(0, 4)
                    .map((listing) => (
                      <div
                        key={listing.id}
                        className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-5"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {listing.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {listing.location}
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                          {listing.guests
                            ? `${listing.guests} guests`
                            : "Guest info not available"}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-bold text-slate-900">
                Quick summary
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Role</span>
                  <span>{userRole}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Listings</span>
                  <span>
                    {userRole === "HOST"
                      ? hostListings.length
                      : listings.length}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Bookings</span>
                  <span>{bookings.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Since</span>
                  <span>{new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
      {/* Add Listing Modal */}
      <AddListingModal
        isOpen={isAddListingOpen}
        onClose={() => setIsAddListingOpen(false)}
      />
    </div>
  );
}
