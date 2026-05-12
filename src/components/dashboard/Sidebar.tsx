import { LayoutDashboard, ShoppingCart, Users, Package, Settings, FileText, BarChart3, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import imgLogo from "../../assets/images/845b21f65344d6146fb695bae9c54a5c6ced992a.png";
import imgMiniLogo from "../../assets/images/95175b287e1a32dee4d19a5eb67db8abc7dbaaec.png";

const menuItems = [
  { id: '1', label: 'Dashboard', icon: LayoutDashboard, active: true },
  { id: '2', label: 'Listings', icon: ShoppingCart, active: false },
  { id: '3', label: 'Bookings', icon: Package, active: false },
  { id: '4', label: 'Users', icon: Users, active: false },
  { id: '5', label: 'Analytics', icon: BarChart3, active: false },
  { id: '6', label: 'Reports', icon: FileText, active: false },
  { id: '7', label: 'Notifications', icon: Bell, active: false },
  { id: '8', label: 'Settings', icon: Settings, active: false },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`hidden lg:flex lg:flex-col bg-white border-r border-gray-200 fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
       <div className="absolute -right-5 top-10">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-600"
        >
          {collapsed ? <ChevronRight size={30} /> : <ChevronLeft size={30} />}
        </button>
      </div>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
        <img
          src={collapsed ? imgMiniLogo : imgLogo}
          alt="Logo"
          className={`transition-all duration-300 ${collapsed ? 'h-8 w-8' : 'h-8'}`}
        />
      </div>

      {/* Toggle Button */}
     

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                  item.active
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon size={20} />
                {!collapsed && <span className="font-medium">{item.label}</span>}

                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.label}
                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  );
}
