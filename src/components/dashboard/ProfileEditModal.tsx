import * as React from "react";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileEditModal = ({ isOpen, onClose }: ProfileEditModalProps) => {
  const { updateUser, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch current user data when modal opens
  React.useEffect(() => {
    if (isOpen && user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [isOpen, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await updateUser({ name, email });
      onClose();
    } catch (err: any) {
      setError(err?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        <h2 className="mb-4 text-xl font-bold text-gray-900">Edit Profile</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="h-10 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-10 w-full"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF5A5F] hover:bg-[#e04f54] text-white py-2 px-4 rounded-lg"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </div>
    </div>
  );
};