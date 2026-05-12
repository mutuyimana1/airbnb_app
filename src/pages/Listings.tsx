import { useMemo, useState } from "react";
import { ChevronDown, RotateCcw, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useStore } from "@/store/StoreContext";
import { useListings } from "@/features/listings/hooks/useListings";
import { useFavorites } from "@/features/listings/hooks/useFavorites";
import Spinner from "@/shared/components/Spinner";
import ListingCard from "@/components/ListingCard";

const categories = [
  { name: "Eat & Drink", count: 62 },
  { name: "Coaching", count: 31 },
  { name: "Apartments", count: 20 },
  { name: "Services", count: 43 },
  { name: "Classifieds", count: 16 },
  { name: "Fitness", count: 22 },
  { name: "Events", count: 21 },
  { name: "Other", count: 17 },
];

const Listings = () => {
  const queryResult = useListings();
  const { isLoading, isError, data = [] } = queryResult;

  const {
    state: { filter },
  } = useStore();

  const { toggle, isSaved } = useFavorites();

  const [selectedCategory, setSelectedCategory] = useState("Coaching");

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
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
          {/* LEFT SIDEBAR */}
          <aside className="bg-white rounded-[10px] border border-[#ececec] p-8 h-fit sticky top-6 self-start">
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
                    000 $3
                  </span>

                  <span className="bg-[#e5e5e5] text-[#666] text-xs px-3 py-1 rounded">
                    000 $5
                  </span>
                </div>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="py-10 border-b border-[#ededed]">
              <h2 className="text-[34px] font-semibold text-center text-[#222]">
                Categories
              </h2>

              <p className="text-sm text-[#777] text-center leading-7 mt-2 mb-8">
                Duis a leo sit amet odio volutpat auctor ut a lorem
              </p>

              <div className="space-y-5">
                {categories.map((category) => (
                  <label
                    key={category.name}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[17px] text-[#444] group-hover:text-[#FF5A5F] transition">
                        {category.name}
                        <span className="text-[#999]">({category.count})</span>
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type="radio"
                        checked={selectedCategory === category.name}
                        onChange={() => setSelectedCategory(category.name)}
                        className="sr-only"
                      />

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
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* ORDER */}
            <div className="py-10">
              <h2 className="text-[34px] font-semibold text-center text-[#222]">
                Order by
              </h2>

              <p className="text-sm text-[#777] text-center leading-7 mt-2 mb-8">
                Duis a leo sit amet odio volutpat auctor ut a lorem
              </p>

              <button className="w-full h-14 border border-[#ececec] rounded-xl flex items-center justify-between px-5 text-[#777]">
                <ChevronDown size={18} />
                Latest
              </button>

              <Button className="w-full h-14 mt-10 rounded-xl bg-[#FF5A5F] hover:bg-[#ff494f] text-white text-base font-semibold shadow-none">
                Apply filters
              </Button>

              <button className="w-full mt-5 flex items-center justify-center gap-2 text-[#777] hover:text-black transition">
                Clear filters
                <RotateCcw size={15} />
              </button>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section>
            {/* TOPBAR */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 rounded-lg border border-[#e5e5e5] bg-white flex items-center justify-center text-[#444]">
                  <List size={18} />
                </button>

                <button className="w-11 h-11 rounded-lg border border-[#e5e5e5] bg-white flex items-center justify-center text-[#444]">
                  <LayoutGrid size={18} />
                </button>
              </div>

              <h2 className="text-[20px] font-medium text-[#333]">
                All{" "}
                <span className="font-bold">
                  {filteredListings.length.toLocaleString()}
                </span>{" "}
                listing found
              </h2>
            </div>

            {/* LISTINGS */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  saved={isSaved(listing.id)}
                  onToggleSave={() => toggle(listing.id, listing.title)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Listings;
