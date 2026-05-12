import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cities, type City } from "../data/travelData";

interface CityCardProps {
  city: City;
}

function CityCard({ city }: CityCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shrink-0 w-[260px] md:w-[300px] h-[420px] md:h-[460px] cursor-pointer">
      {/* Image */}
      <img
        src={city.image}
        alt={city.city}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Card content */}
      <div className="absolute inset-0 flex flex-col justify-between p-7">
        {/* Top: country tag */}
        <div>
          <span
            className="text-white/80 text-sm"
            style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem" }}
          >
            {city.country}
          </span>
        </div>

        {/* Bottom: city name and listings */}
        <div>
          <h3
            className="text-white mb-1"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 500,
              fontSize: "2rem",
              lineHeight: 1.4,
            }}
          >
            {city.city}
          </h3>
          <p
            className="text-white/70 text-base mb-4"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            {city.listingCount}
          </p>

          {/* Explore more link */}
          <div className="flex items-center justify-between">
            <div className="backdrop-blur-sm bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowRight size={14} className="text-white" />
            </div>
            <a
              href="#"
              className="text-white text-xs font-semibold tracking-[2px] uppercase hover:text-[#f84525] transition-colors"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              Explore more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExploreCities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(cities.length - 1, prev + 1));
  };

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#f84525" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <svg
          viewBox="0 0 1920 700"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 400C400 200 800 600 1200 350C1600 100 1800 400 1920 300V700H0V400Z"
            fill="rgba(255,200,180,0.3)"
          />
          <path
            d="M0 500C300 350 700 550 1100 400C1500 250 1750 450 1920 380V700H0V500Z"
            fill="rgba(255,200,180,0.2)"
          />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          {/* Section Header */}
          <div>
            <span
              className="text-white/80 text-3xl md:text-4xl capitalize mb-2 block"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
            >
              Top Regions
            </span>
            <h2
              className="text-white capitalize"
              style={{
                fontFamily: "'Wix Madefor Display', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
              }}
            >
              Explore Cities
            </h2>
            <p
              className="text-white/80 mt-2 text-base"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              Discover exciting categories.{" "}
              <span className="font-semibold text-white">
                Find what you&apos;re looking for
              </span>
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= cities.length - 1}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cities Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (260 + 20)}px)`,
            }}
          >
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
