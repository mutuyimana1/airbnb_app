import { useMemo, useState } from "react";
import {
  ChevronDown,
  List,
  Grid2X2,
  Search,
  MapPin,
} from "lucide-react";

import { Slider } from "@/components/ui/slider";
import { useStore } from "@/store/StoreContext";
import { useSavedListings } from "@/features/listings/hooks/useSavedListings";
import Spinner from "@/shared/components/Spinner";
import ListingsCard from "@/components/ListingsCard";
import ListingTable from "@/components/dashboard/components/ListingTable";
import { useFavorites } from "@/features/listings/hooks/useFavorites";

const searchCategories = [
  "All Categories",
  "Apartments",
  "Villa",
  "House",
  "Cabin",
];

const SavedList = () => {
  const { data, isLoading, isError } = useSavedListings();
  const { toggle, isSaved } = useFavorites();
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState("");
  const {
    state: { filter },
  } = useStore();

  const savedListings = data ?? [];

  const filteredListings = useMemo(() => {
    let result = savedListings;

    const normalized = filter.trim().toLowerCase();
    if (normalized) {
      result = result.filter((listing) => {
        const fields = [
          listing.title,
          listing.location,
          listing.description,
          listing.img,
          listing.photos?.[0]?.url,
        ];
        return fields.some(
          (field) =>
            typeof field === "string" && field.toLowerCase().includes(normalized),
        );
      });
    }

    if (selectedCategory !== "All Categories") {
      result = result.filter(
        (listing) => listing.type === selectedCategory,
      );
    }

    if (location.trim()) {
      const loc = location.trim().toLowerCase();
      result = result.filter((listing) =>
        (listing.location || "").toLowerCase().includes(loc),
      );
    }

    return result;
  }, [savedListings, filter, selectedCategory, location]);

  if (isLoading) return <Spinner />;

  if (isError) {
    return <div className="py-20 text-center">Failed to load saved listings</div>;
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen mt-20">
      {/* Search Bar */}
      <div className="w-full px-40 relative">
        <div className="bg-white rounded-[50px] shadow-2xl p-3 flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center">
          {/* Category Button */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 bg-[#f84525] text-white px-6 py-4 rounded-[32px] text-sm font-medium whitespace-nowrap hover:bg-[#e03e1f] transition-colors min-w-[160px] justify-between"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              <span>{selectedCategory}</span>
              <ChevronDown size={14} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl py-2 z-50 min-w-[200px] border border-gray-100">
                {searchCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f84525]/10 hover:text-[#f84525] transition-colors"
                    style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-200 mx-2 shrink-0" />

          {/* Location field */}
          <div className="flex items-center gap-3 flex-1 px-4">
            <MapPin size={20} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search saved listings..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 outline-none text-gray-700 text-sm bg-transparent placeholder-gray-400"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            />
          </div>

          {/* Search Button */}
          <button className="bg-[#f84525] hover:bg-[#e03e1f] text-white p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#f84525]/30 sm:ml-2 shrink-0">
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-6 sm:py-10">
        {/* Saved Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Saved Listings ({filteredListings.length})
          </h2>
          {filteredListings.length === 0 && (
            <p className="text-gray-500 text-sm mt-1">
              {savedListings.length === 0
                ? "You haven't saved any listings yet."
                : "No saved listings match your filters."}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-10">
          {/* SIDEBAR */}
          <aside className="w-full mt-12">
            {/* MOBILE / TABLET */}
            <div className="lg:hidden overflow-x-auto pb-2">
              <div className="flex gap-4 min-w-max">
                {/* CATEGORIES */}
                <div className="bg-white rounded-2xl border border-[#ececec] p-5 min-w-[280px]">
                  <h2 className="text-xl font-semibold text-[#222] mb-5">
                    Categories
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {searchCategories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span className="text-sm text-[#444] whitespace-nowrap">
                          {cat}
                        </span>
                        <input
                          type="radio"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-[#FF5A5F]"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block bg-white rounded-[10px] border border-[#ececec] p-8 h-fit sticky top-6">
              {/* CATEGORIES */}
              <div className="py-10 border-b border-[#ededed]">
                <h2 className="text-[34px] font-semibold text-center text-[#222]">
                  Categories
                </h2>
                <div className="space-y-5 mt-6">
                  {searchCategories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <span className="text-[17px] text-[#444] group-hover:text-[#FF5A5F] transition">
                        {cat}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md border transition flex items-center justify-center ${
                          selectedCategory === cat
                            ? "bg-[#FF5A5F] border-[#FF5A5F]"
                            : "border-[#d8d8d8]"
                        }`}
                      >
                        {selectedCategory === cat && (
                          <span className="text-white text-[10px]">✓</span>
                        )}
                      </div>
                      <input
                        type="radio"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="hidden"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="min-w-0">
            {/* TOPBAR */}
            <div className="flex items-center right-0 mb-1 gap-4 justify-end">
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

            {/* SAVED LISTINGS */}
            {view === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5 sm:gap-7">
                {filteredListings.map((listing) => (
                  <ListingsCard
                    key={listing.id}
                    listing={listing}
                    saved={isSaved(listing.id)}
                    onToggleSave={() => toggle(listing.id, listing.title)}
                  />
                ))}
              </div>
            )}
            {view === "list" && <ListingTable listingData={filteredListings} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SavedList;