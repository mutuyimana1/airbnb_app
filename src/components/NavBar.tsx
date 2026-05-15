import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Heart, User, LogOut } from "lucide-react";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import { useFavorites } from "@/features/listings/hooks/useFavorites";
import { navItems } from "@/data/items";

export function Navbar() {
   const location = useLocation();
   const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();
   const { count: savedCount } = useFavorites();
   const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [_anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/");
    setAnchorEl(null);
  };

  const handleAddListing = () => {
    if (isAuthenticated) {
      navigate("/add-listing");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    setScrolled(window.scrollY > 60);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 60);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navbarClasses = !isHome
    ? "bg-[#191e25] shadow-lg"
    : scrolled
      ? "bg-[#191e25] shadow-lg"
      : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <div className="h-16 flex items-center justify-between">
              <span
                className={`transition-all duration-300'h-4 w-4 text-2xl text-white`}
              >
                Air<span className="font-bold text-orange-500">bnb</span>
              </span>
            </div>
          </NavLink>

{/* Desktop Nav Links */}
           <div className="hidden lg:flex items-center gap-8">

            {navItems.map((link)=>{
              return(
                // (link.roles && link.roles.includes(userRole?? "")) && 
                <NavLink
                 key={link.name}
                 to={link.page}
                 end
                 className={({ isActive }) => `
                     hover:text-white text-sm font-medium
                    transition-colors duration-200 relative group
                    ${isActive ? "text-orange-400" : "text-white/90"}
                  `}
                 style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
               >
                 {link.name}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f84525] transition-all duration-300 group-hover:w-full" />
               </NavLink>
               )
            }
            )}
           </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-white/80 hover:text-white transition-colors p-2">
              <Search size={18} />
            </button>
<button
               onClick={() => navigate("/saved")}
               className="text-white/80 hover:text-white transition-colors p-2 relative"
             >
               <Heart size={18} />
               {savedCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-[#f84525] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                   {savedCount}
                 </span>
               )}
             </button>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <LogOut size={18} />
                <span
                  className="text-sm"
                  style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  Logout
                </span>
              </button>
            ) : (
              <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors p-2">
                <User size={18} />
                <Link
                  to="/login"
                  className="text-sm"
                  style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  Sign In
                </Link>
              </button>
            )}
            <button
              onClick={handleAddListing}
              className="bg-[#f84525] hover:bg-[#e03e1f] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#f84525]/30"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              Add Listing
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#191e25] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
 {navItems.map((link)=>{
              return(
                // (link.roles && link.roles.includes(userRole?? "")) && 
                <NavLink
                 key={link.name}
                 to={link.page}
                 end
                 className={({ isActive }) => `
                     hover:text-white text-sm font-medium
                    transition-colors duration-200 relative group
                    ${isActive ? "text-orange-400" : "text-white/90"}
                  `}
                 style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
               >
                 {link.name}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f84525] transition-all duration-300 group-hover:w-full" />
               </NavLink>
               )
            }
            )}
            <div className="pt-3 border-t border-white/10 flex gap-3">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex-1 text-center border border-red-500/30 text-red-400 hover:bg-red-500/10 py-2.5 rounded-full text-sm transition-colors"
                  style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="flex-1 text-center border border-white/30 text-white py-2.5 rounded-full text-sm"
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
                >
                  Sign In
                </NavLink>
              )}
              <button
                onClick={() => {
                  handleAddListing();
                  setMobileOpen(false);
                }}
                className="flex-1 text-center bg-[#f84525] text-white py-2.5 rounded-full text-sm"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              >
                Add Listing
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
