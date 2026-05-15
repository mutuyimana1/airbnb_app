import { LayoutDashboard, ShoppingCart, Users, Package, Settings, FileText, BarChart3, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { id: '1', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { id: '2', label: 'Listings', icon: ShoppingCart, path: '/dashboard/listings' },
  { id: '3', label: 'Bookings', icon: Package, path: '/dashboard/bookings' },
  { id: '4', label: 'Users', icon: Users, path: '/dashboard/users' },
  { id: '5', label: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
  { id: '6', label: 'Reports', icon: FileText, path: '/dashboard/reports' },
  { id: '7', label: 'Notifications', icon: Bell, path: '/dashboard/notifications' },
  { id: '8', label: 'Settings', icon: Settings, path: '/dashboard/settings' },
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
        <span className={`transition-all duration-300 ${collapsed ? 'h-4 w-4 text-base' : 'h-4 text-2xl'}`}>Air<span className="font-bold text-orange-500">bnb</span></span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({isActive}) => `flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg transition-all duration-200 group relative ${                    isActive
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
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
