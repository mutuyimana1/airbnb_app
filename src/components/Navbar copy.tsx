import { Heart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          ListOn
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">Home</a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">Listing</a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">Pages</a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">Blog</a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-orange-500 transition-colors duration-300">
            <Heart size={20} />
          </button>
          <button className="text-white hover:text-orange-500 transition-colors duration-300">
            <User size={20} />
          </button>
          <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300">
            Add Listing
          </button>
        </div>
      </div>
    </nav>
  );
}
