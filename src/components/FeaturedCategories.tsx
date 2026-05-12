import React from "react";
import {
  Home,
  Utensils,
  Music,
  ShoppingBag,
  Tv,
  Dumbbell,
} from "lucide-react";
import { categories, type Category } from "../data/travelData";

const iconMap: Record<string, React.ReactNode> = {
  "🏠": <Home size={28} className="text-[#f84525]" />,
  "🍽️": <Utensils size={28} className="text-[#f84525]" />,
  "🎵": <Music size={28} className="text-[#f84525]" />,
  "🛒": <ShoppingBag size={28} className="text-[#f84525]" />,
  "📺": <Tv size={28} className="text-[#f84525]" />,
  "💪": <Dumbbell size={28} className="text-[#f84525]" />,
};

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/20 hover:border-[#f84525]/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#f84525]/10 hover:-translate-y-1">
      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-white text-lg font-semibold truncate"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          {category.title}
        </h3>
        <p
          className="text-white/70 text-sm"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          {category.listingCount}
        </p>
      </div>

      {/* Icon Box */}
      <div className="bg-[#191e25] rounded-xl p-4 shrink-0 group-hover:bg-[#f84525]/10 transition-colors duration-300">
        {iconMap[category.icon]}
      </div>

      {/* Arrow link */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white/20 rounded-full p-1">
          <svg className="w-3 h-3 text-white" fill="white" viewBox="0 0 12 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 1.5L10.5 6L6.5 10.5M10.5 6H1.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCategories() {
  return (
    <section className="bg-[#191e25] py-16 md:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span
            className="text-[#f84525] text-3xl md:text-4xl capitalize mb-2"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
          >
            Categories
          </span>
          <h2
            className="text-white capitalize"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Featured Categories
          </h2>
          <p
            className="text-white/70 mt-3 text-base"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            Discover exciting categories.{" "}
            <span className="text-[#f84525] font-semibold">
              Find what you&apos;re looking for
            </span>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
