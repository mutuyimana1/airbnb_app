import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BookingPayment } from "../schemas/booking";

interface StepPaymentProps {
  onNext: () => void;
  onBack: () => void;
}

export const StepPayment = ({ onNext, onBack }: StepPaymentProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<BookingPayment>();

  const handleContinue = async () => {
    const isValid = await trigger(["card", "expiry", "cvv"]);
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Payment Details</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Card Number</label>
        <Input
          type="text"
          {...register("card")}
          className="w-full border-gray-200 rounded-lg px-4 py-2 focus-visible:ring-0 focus-visible:border-[#FF5A5F] focus-visible:ring-0"
          placeholder="1234 5678 9012 3456"
          maxLength={16}
        />
        {errors.card && (
          <p className="text-xs text-red-500">{errors.card.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Expiry (MM/YY)</label>
          <Input
            type="text"
            {...register("expiry")}
            className="w-full border-gray-200 rounded-lg px-4 py-2 focus-visible:ring-0 focus-visible:border-[#FF5A5F] focus-visible:ring-0"
            placeholder="12/25"
            maxLength={5}
          />
          {errors.expiry && (
            <p className="text-xs text-red-500">{errors.expiry.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">CVV</label>
          <Input
            type="text"
            {...register("cvv")}
            className="w-full border-gray-200 rounded-lg px-4 py-2 focus-visible:ring-0 focus-visible:border-[#FF5A5F] focus-visible:ring-0"
            placeholder="123"
            maxLength={3}
          />
          {errors.cvv && (
            <p className="text-xs text-red-500">{errors.cvv.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 rounded-lg py-2 font-semibold border-gray-200 hover:bg-gray-50 shadow-none"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="flex-1 bg-[#FF5A5F] hover:bg-[#e04f54] text-white rounded-lg py-2 font-semibold border-none shadow-none"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
