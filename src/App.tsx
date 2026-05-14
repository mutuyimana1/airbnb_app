import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import HomeLayout from "./components/layout/HomeLayout";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import { Spinner } from "@/components/ui/spinner"
import Dashboard from "./pages/Dashboard";
import { DashboardListings } from "./components/dashboard/pages/DashboardListings";
import { DashboardBookings } from "./components/dashboard/pages/DashboardBookings";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const Listings = lazy(() => import("./pages/Listings"));
const ListingDetail = lazy(() => import("./pages/ListingDetails"));
const LoginPage = lazy(
  () => import("./components/features/auth/pages/LoginPage"),
);
const SignupPage = lazy(
  () => import("./components/features/auth/pages/SignupPage"),
);
const DashboardLayout = lazy(
  () => import("./components/layout/DashboardLayout"),
);
// const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddListing = lazy(() => import("./pages/AddListing"));
const BookingsPage = lazy(() => import("./features/bookings/pages/BookingsPage"));
const SavedList = lazy(() => import("./pages/SavedList"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

// Configure NProgress
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.1 });

export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">

      <Spinner className="size-8 text-red-300" />

          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route element={<HomeLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/properties/:listingId" element={<ListingDetail />} />
            
          <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <BookingsPage />
              </ProtectedRoute>
            }
          />
          </Route>

<Route
              path="/dashboard"
              element={
                <ProtectedRoute forbiddenRoles={["GUEST"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
           >
             <Route index element={<Dashboard/>} />
             <Route
               path="listings"
               element={
                 <DashboardListings />
               }
             />
             <Route
               path="bookings"
               element={
                 <DashboardBookings />
               }
             />
             <Route
               path="settings"
               element={
                 <div className="p-10 text-slate-900">
                   <h2 className="text-2xl font-bold">Settings</h2>
                   <p className="mt-4 text-sm text-slate-500">
                     Manage account preferences and notifications here.
                   </p>
                 </div>
               }
             />
           </Route>

          <Route
            path="/add-listing"
            element={
              <ProtectedRoute>
                <AddListing />
              </ProtectedRoute>
            }
          />

<Route path="/saved" element={<SavedList />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
