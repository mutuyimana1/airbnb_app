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
import { useListings } from "@/features/listings/hooks/useListings";
import { useFavorites } from "@/features/listings/hooks/useFavorites";

import Spinner from "@/shared/components/Spinner";
import ListingTable from "@/components/dashboard/components/ListingTable";
import ListingsCard from "@/components/ListingsCard";
const searchCategories = [
  "All Categories",
  "Apartments",
  "Villa",
  "House",
  "Cabin",
];
const categories = [
  { name: "House", count: 31 },
  { name: "Apartments", count: 20 },
  { name: "Villa", count: 43 },
  { name: "Cabin", count: 16 },
];

const Listings = () => {
  const queryResult = useListings();

  const { isLoading, isError, data = [] } = queryResult;
  const [view, setView] = useState("grid");
  const {
    state: { filter },
  } = useStore();

  const { toggle, isSaved } = useFavorites();

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState("");
  const filteredListings = useMemo(() => {
    const normalized = filter.trim().toLowerCase();

    if (!normalized) return data;

    return data.filter((listing) => {
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
  }, [data, filter]);

  if (isLoading) return <Spinner />;

  if (isError) {
    return <div className="py-20 text-center">Failed to load listings</div>;
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
              placeholder="What are you looking for?"
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
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pyd-6 sm:pyd-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-10">
          {/* SIDEBAR */}
          <aside className="w-full mt-12">
            {/* MOBILE / TABLET */}
            <div className="lg:hidden overflow-x-auto pb-2">
              <div className="flex gap-4 min-w-max">
                {/* PRICE FILTER */}
                <div className="bg-white rounded-2xl border border-[#ececec] p-5 min-w-[280px]">
                  <h2 className="text-xl font-semibold text-[#222] mb-4">
                    Price Filter
                  </h2>

                  <Slider
                    defaultValue={[30, 70]}
                    max={100}
                    step={1}
                    className="mb-5"
                  />

                  <div className="flex justify-between text-xs">
                    <span className="bg-[#222] text-white px-2 py-1 rounded">
                      $500
                    </span>

                    <span className="bg-[#222] text-white px-2 py-1 rounded">
                      $3000
                    </span>

                    <span className="bg-[#e5e5e5] text-[#666] px-2 py-1 rounded">
                      $5000
                    </span>
                  </div>
                </div>

                {/* CATEGORIES */}
                <div className="bg-white rounded-2xl border border-[#ececec] p-5 min-w-[320px]">
                  <h2 className="text-xl font-semibold text-[#222] mb-5">
                    Categories
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span className="text-sm text-[#444] whitespace-nowrap">
                          {category.name}
                        </span>

                        <input
                          type="radio"
                          checked={selectedCategory === category.name}
                          onChange={() => setSelectedCategory(category.name)}
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
              {/* PRICE FILTER */}
              <div className="pb-10 border-b border-[#ededed]">
                <h2 className="text-[34px] font-semibold text-center text-[#222]">
                  Price Filter
                </h2>

                <p className="text-sm text-[#777] text-center py-4 mb-8">
                  Select min and max price range
                </p>

                <div className="px-2">
                  <Slider
                    defaultValue={[30, 70]}
                    max={100}
                    step={1}
                    className="mb-8"
                  />

                  <div className="flex justify-between">
                    <span className="bg-[#222] text-white text-xs px-3 py-1 rounded">
                      $500
                    </span>

                    <span className="bg-[#222] text-white text-xs px-3 py-1 rounded">
                      $3000
                    </span>

                    <span className="bg-[#e5e5e5] text-[#666] text-xs px-3 py-1 rounded">
                      $5000
                    </span>
                  </div>
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="py-10 border-b border-[#ededed]">
                <h2 className="text-[34px] font-semibold text-center text-[#222]">
                  Categories
                </h2>

                <div className="space-y-5">
                  {categories.map((category) => (
                    <label
                      key={category.name}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <span className="text-[17px] text-[#444] group-hover:text-[#FF5A5F] transition">
                        {category.name}
                        <span className="text-[#999]">({category.count})</span>
                      </span>

                      <div
                        className={`w-5 h-5 rounded-md border transition flex items-center justify-center ${
                          selectedCategory === category.name
                            ? "bg-[#FF5A5F] border-[#FF5A5F]"
                            : "border-[#d8d8d8]"
                        }`}
                      >
                        {selectedCategory === category.name && (
                          <span className="text-white text-[10px]">✓</span>
                        )}
                      </div>

                      <input
                        type="radio"
                        checked={selectedCategory === category.name}
                        onChange={() => setSelectedCategory(category.name)}
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

            {/* LISTINGS */}
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

export default Listings;
