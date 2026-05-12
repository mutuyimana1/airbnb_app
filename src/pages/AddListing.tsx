import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import { AddListingModal } from "@/features/listings/components/AddListingModal";

export default function AddListing() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if not host
  if (user?.role?.toUpperCase() !== "HOST") {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AddListingModal isOpen={true} onClose={() => navigate("/dashboard")} />
    </div>
  );
}