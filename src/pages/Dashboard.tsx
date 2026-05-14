import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import DataTable from "../components/dashboard/DataTable";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import axiosInstance from "@/lib/axios";
import type { Booking, Listing } from "@/types";
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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
    <div className="min-h-screen bg-gray-50">


        <main className="p-4 lg:p-8">
          {/* Stats Cards */}
          <div className="mb-8">
            <StatsCards />
          </div>

          {/* Analytics Chart */}
          <div className="mb-8">
            <AnalyticsChart />
          </div>

          {/* Data Table */}
          <div className="mb-8">
            <DataTable />
          </div>
        </main>
    </div>
  );
}
