import { useState, useMemo, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StepDates } from "./StepDates";
import { StepPayment } from "./StepPayment";
import { StepConfirmation } from "./StepConfirmation";
import {
  bookingSchema,
  bookingDatesSchema,
  bookingPaymentSchema,
} from "../schemas/booking";
import type { Booking } from "../schemas/booking";
import { useBooking } from "@/features/bookings/hooks/useBooking";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import axiosInstance from "@/lib/axios";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const BOOKING_INTENT_KEY = "booking_intent_listing";

export const BookingForm = ({ listingId }: { listingId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentStep, currentStepIndex, totalSteps, next, back, reset } = useBooking();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  // TanStack Query mutation for creating bookings
  const createBookingMutation = useMutation({
    mutationFn: async (data: { checkIn: string; checkOut: string }) => {
      const response = await axiosInstance.post("/bookings", {
        listingId,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Booking confirmed successfully!");
      setIsOpen(false);
      reset();
      // Invalidate bookings to refresh data
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      // Navigate to bookings page
      navigate("/bookings");
    },
    onError: (error: Error) => {
      console.error("Booking failed:", error);
      toast.error("Failed to create booking. Please try again.");
    },
  });

  // Check if there's a pending booking intent for this listing (after login redirect)
  useEffect(() => {
    const intent = sessionStorage.getItem(BOOKING_INTENT_KEY);
    if (intent === listingId && isAuthenticated) {
      setIsOpen(true);
      sessionStorage.removeItem(BOOKING_INTENT_KEY);
    }
  }, [listingId, isAuthenticated]);

  // Use step-specific schema instead of full schema for validation
  const stepSchema = useMemo(() => {
    switch (currentStep) {
      case "dates":
        return bookingDatesSchema;
      case "payment":
        return bookingPaymentSchema;
      case "confirmation":
        return bookingSchema;
      default:
        return bookingSchema;
    }
  }, [currentStep]);

  const methods = useForm<Booking>({
    resolver: zodResolver(stepSchema) as any,
    mode: "onBlur",
    defaultValues: {
      checkIn: "",
      checkOut: "",
      card: "",
      expiry: "",
      cvv: "",
    },
  });

  type Step = "dates" | "payment" | "confirmation";

  const steps: Record<Step, React.ReactNode> = {
    dates: (
      <StepDates
        onNext={() => {
          methods.handleSubmit((data) => next(data))();
        }}
      />
    ),
    payment: (
      <StepPayment
        onNext={() => {
          methods.handleSubmit((data) => next(data))();
        }}
        onBack={back}
      />
    ),
    confirmation: (
      <StepConfirmation
        onConfirm={() => {
          const values = methods.getValues();
          createBookingMutation.mutate({
            checkIn: values.checkIn,
            checkOut: values.checkOut,
          });
        }}
        onBack={back}
        isSubmitting={createBookingMutation.isPending}
      />
    ),
  };

  const openBooking = () => {
    if (!isAuthenticated) {
      sessionStorage.setItem(BOOKING_INTENT_KEY, listingId);
      navigate("/login", { state: { from: window.location.pathname + window.location.search } });
      return;
    }
    setIsOpen(true);
    reset();
    methods.reset({
      checkIn: "",
      checkOut: "",
      card: "",
      expiry: "",
      cvv: "",
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={openBooking}
        className="w-full bg-[#FF5A5F] hover:bg-[#e04f54] text-white rounded-xl py-4 font-bold text-sm shadow-none border-none focus-visible:ring-0 focus-visible:border-[#FF5A5F] active:scale-[0.98] transition-all"
      >
        Book Now
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
       <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] animate-in fade-in duration-300"
        onClick={() => {
          setIsOpen(false);
          reset();
        }}
      />

      {/* Modal Container - Added z-[999] */}
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl pointer-events-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Positioned specifically inside the relative container */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                reset();
              }}
              className="absolute -top-12 right-0 md:-right-12 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20"
              aria-label="Close modal"
            >
              <X className="size-6" />
            </button>

            {/* Step Indicators */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentStepIndex
                        ? "w-8 bg-[#FF5A5F]"
                        : index < currentStepIndex
                          ? "w-4 bg-[#FF5A5F]/40"
                          : "w-4 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {currentStepIndex + 1} / {totalSteps}
              </span>
            </div>

            {/* Step Content */}
            <div className="p-8">{steps[currentStep]}</div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};
