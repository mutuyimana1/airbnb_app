import { Search, Bell, Menu} from "lucide-react";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileEditModal } from "./ProfileEditModal";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const userRole = user?.role?.toUpperCase() === "HOST" ? "HOST" : "GUEST";
  const userName = user?.name || "Traveler";
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    logout();
    // navigate("/");
    setAnchorEl(null);
  };

  const handleEditProfile = () => {
    setIsProfileModalOpen(true);
    setAnchorEl(null);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="h-16 flex items-center justify-between px-4 lg:px-8">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
            <div>
              <p className="text-sm text-gray-900">Dashboard</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 min-w-[300px]">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
              />
            </div>
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={(e:any) => {
                  setAnchorEl(e.currentTarget);
                }}
                className="flex items-center gap-3 pl-3 border-l border-gray-200"
              >
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900 capitalize">{userName}</p>
                  <p className="text-xs text-gray-500">{user?.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                  {userName.charAt(0)}
                </div>
              </button>
              {/* Dropdown Menu */}
              {anchorEl ? (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <button
                    onClick={handleEditProfile}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Profile Edit Modal */}
      <ProfileEditModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </>
  );
}