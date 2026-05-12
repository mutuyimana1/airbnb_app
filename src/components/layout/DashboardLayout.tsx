import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/components/features/auth/hooks/useAuth";

const DashboardLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-72 bg-slate-950 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <div className="mb-10">
          <p className="text-sm text-slate-400">Signed in as</p>
          <p className="mt-2 text-lg font-semibold text-white">
            {user?.name || "Guest User"}
          </p>
          <p className="text-sm text-slate-400">
            {user?.role ? user.role.toLowerCase() : "visitor"}
          </p>
        </div>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <Link to="/dashboard" className="hover:text-cyan-300 transition">
            Overview
          </Link>
          <Link
            to="/dashboard/settings"
            className="hover:text-cyan-300 transition"
          >
            Settings
          </Link>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold text-slate-700">
              {user ? `Hello, ${user.name}` : "Hello"}
            </span>
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
