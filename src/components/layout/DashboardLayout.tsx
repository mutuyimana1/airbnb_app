import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import DashboardHeader from "../dashboard/DashboardHeader";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50-50 w-full">
    
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
    
          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <div
                className="w-64 bg-white h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Sidebar collapsed={false} onToggle={() => {}} />
              </div>
            </div>
          )}

      <div className={`transition-all duration-300 w-full ${
          sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}>
       <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
