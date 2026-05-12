import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import type { Booking } from "../schemas/booking";

interface StepConfirmationProps {
  onConfirm: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export const StepConfirmation = ({
  onConfirm,
  onBack,
  isSubmitting = false,
}: StepConfirmationProps) => {
  const { getValues } = useFormContext<Booking>();
  const { user } = useAuth();
  const values = getValues();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const maskCard = (card: string) => {
    return `**** **** **** ${card.slice(-4)}`;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Confirm Your Booking</h2>

      <div className="rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Dates Section */}
        <div className="border-b pb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Trip Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Check-in</p>
              <p className="font-medium">{formatDate(values.checkIn)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Check-out</p>
              <p className="font-medium">{formatDate(values.checkOut)}</p>
            </div>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="border-b pb-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            Personal Information
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Name</p>
              <p className="font-medium">{user?.name || "Not available"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="font-medium">{user?.email || "Not available"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <p className="font-medium">{user?.phone || "Not available"}</p>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Card Number</p>
              <p className="font-medium font-mono">{maskCard(values.card)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Expiry</p>
                <p className="font-medium">{values.expiry}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">CVV</p>
                <p className="font-medium">***</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 rounded-lg py-2 font-semibold"
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button
          onClick={onConfirm}
          className="flex-1 bg-[#FF5A5F] hover:bg-[#e04f54] text-white rounded-lg py-2 font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};
