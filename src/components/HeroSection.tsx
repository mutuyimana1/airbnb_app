import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { heroBg } from "../assets/images";

const searchCategories = [
  "All Categories",
  "Hotels",
  "Restaurants",
  "Shopping",
  "Entertainment",
  "Gymnasiums",
];

export function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Travel background"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(25,30,37,0.7)] via-[rgba(25,30,37,0.5)] to-[rgba(25,30,37,0.75)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1100px] mx-auto pt-28 pb-20 w-full">
        {/* Tagline */}
        <div className="mb-6">
          <span
            className="text-white/90 text-xs font-medium tracking-[2px] uppercase border border-white/30 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            WE ARE #1 ON THE MARKET
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-2">
          <h1
            className="text-white capitalize block"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
              lineHeight: 1.15,
            }}
          >
            We&apos;re Here to Help You
          </h1>
        </div>

        {/* Italic Navigate word with underline accent */}
        <div className="relative inline-block mb-2">
          <span
            className="text-white"
            style={{
              fontFamily: "'Caveat', cursive",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 5.2rem)",
              lineHeight: 1.15,
            }}
          >
            Navigate
          </span>
          {/* Decorative underline */}
          <svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 262 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "12px" }}
          >
            <path
              d="M4 12C50 4 130 2 258 8"
              stroke="#f84525"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mb-6">
          <h1
            className="text-white capitalize"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
              lineHeight: 1.15,
            }}
          >
            While Traveling
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-white/75 mb-10 max-w-xl pb-4"
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
          }}
        >
          You&apos;ll get comprehensive results based on the provided location.
        </p>

        {/* Quick tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["Apartments", "Villa", "House", "Cabin"].map((tag) => (
            <span
              className="text-white/70 hover:text-white text-xs border border-white/20 px-4 py-1.5 rounded-full hover:border-white/50 transition-colors backdrop-blur-sm"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom wave into dark section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0 80L1440 80L1440 30C1200 65 960 75 720 55C480 35 240 20 0 45L0 80Z"
            fill="#191e25"
          />
        </svg>
      </div>
    </section>
  );
}
