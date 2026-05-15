import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { cn } from "@/lib/utils";
import type { Listing } from "@/types";
import { useState, useEffect } from "react";
import { Grid2X2, List, Plus } from "lucide-react";
import ListingTable from "../components/ListingTable";
import ListingsCard from "@/components/ListingsCard";
import { useFavorites } from "@/features/listings/hooks/useFavorites";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import { AddListingModal } from "@/features/listings/components/AddListingModal";

export const DashboardListings = () => {
   const [isAddListingOpen, setIsAddListingOpen] = useState(false);
   const { user } = useAuth();
     const userRole = user?.role?.toUpperCase() === "HOST" ? "HOST" : "GUEST";
  const {
    data: listings = [],
    isLoading,
    error,
  } = useQuery<Listing[]>({
    queryKey: ["listings"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/listings");
      return data;
    },
  });

  const [view, setView] = useState<"grid" | "list">("list");
const { toggle, isSaved } = useFavorites();
  // Load view from localStorage on mount
  useEffect(() => {
    const savedView = localStorage.getItem("dashboardListingsView") as
      | "grid"
      | "list"
      | null;
    if (savedView) {
      setView(savedView);
    }
  }, []);

  // Save view to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dashboardListingsView", view);
  }, [view]);

  if (isLoading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load listings
      </div>
    );
  }

  return (
    <div className="px-6">
      <div className="flex justify-between items-center mb-6">
        <p className=" text-gray-600">
          Browse through all available properties. You can manage your listings
          here and keep track of your bookings.
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
          </div>
          </button>
          
         
        </div>
      </div>

      {listings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No listings found</p>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((listing) => (
            <ListingsCard
              key={listing.id}
              listing={listing}
              saved={isSaved(listing.id)}
                    onToggleSave={() => toggle(listing.id, listing.title)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <ListingTable listingData={listings} />
        </div>
      )}
      {/* Add Listing Modal */}
      <AddListingModal
        isOpen={isAddListingOpen}
        onClose={() => setIsAddListingOpen(false)}
      />
    </div>
  );
};
