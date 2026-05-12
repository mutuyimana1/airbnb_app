import { useState } from "react";
import type { Booking } from "../schemas/booking";

type Step = "dates" | "payment" | "confirmation";

const steps: Step[] = ["dates", "payment", "confirmation"];

interface UseBookingReturn {
  currentStep: Step;
  currentStepIndex: number;
  totalSteps: number;
  formData: Partial<Booking>;
  next: (data: Partial<Booking>) => void;
  back: () => void;
  reset: () => void;
  submit: () => Promise<void>;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export const useBooking = (): UseBookingReturn => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<Partial<Booking>>({});

  const currentStep = steps[stepIndex];
  const totalSteps = steps.length;
  const isLastStep = stepIndex === totalSteps - 1;
  const isFirstStep = stepIndex === 0;

  const next = (data: Partial<Booking>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (!isLastStep) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const back = () => {
    if (!isFirstStep) {
      setStepIndex((prev) => prev - 1);
    }
  };

  const reset = () => {
    setStepIndex(0);
    setFormData({});
  };

  const submit = async () => {
    // Simulate API call - in a real app this would POST to the bookings endpoint
    console.log("Submitting booking:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return {
    currentStep,
    currentStepIndex: stepIndex,
    totalSteps,
    formData,
    next,
    back,
    reset,
    submit,
    isLastStep,
    isFirstStep,
  };
};
