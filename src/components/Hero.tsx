import { Search, MapPin, ChevronDown } from 'lucide-react';
import img from "../../imports/1920WDefault/4fab8139f728e418dac9175b3baa0568e784e30d.png";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Subtitle */}
        <p className="text-white text-sm tracking-[1.5px] uppercase mb-8">
          WE ARE #1 ON THE MARKET
        </p>

        {/* Main Heading */}
        <h1 className="text-white mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl capitalize mb-2">
            We're Here To Help You
          </span>
          <span className="relative inline-block text-5xl md:text-7xl lg:text-8xl capitalize">
            <span className="font-['Caveat'] italic">Navigate</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 262 16"
              fill="none"
            >
              <path
                d="M4 8C80 4 180 4 258 8"
                stroke="#F84525"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl capitalize mt-2">
            While Traveling
          </span>
        </h1>

        {/* Description */}
        <p className="text-white text-lg md:text-xl mb-12">
          You'll get comprehensive results based on the provided location.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
          {/* Category Select */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
            <ChevronDown size={20} className="text-gray-600" />
            <select className="flex-1 bg-transparent outline-none text-gray-700 cursor-pointer">
              <option>Location</option>
              <option>Restaurants</option>
              <option>Hotels</option>
              <option>Activities</option>
              <option>Shopping</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3">
            <MapPin size={20} className="text-gray-600" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Search Button */}
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
            <Search size={20} />
            <span className="hidden md:inline">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
}
