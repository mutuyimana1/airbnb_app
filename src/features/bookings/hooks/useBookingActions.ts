import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { toast } from "react-hot-toast";

export const useBookingActions = () => {
  const queryClient = useQueryClient();

  const confirmMutation = useMutation({
    mutationFn: async (bookingId: string) => {
      const response = await axiosInstance.patch(
        `/bookings/${bookingId}/confirm`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking confirmed successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to confirm booking"
      );
    },
  });

  const cancelMutation = useMutation({
    mutationFn: async ({
      bookingId,
    }: {
      bookingId: string;
    }) => {
      const response = await axiosInstance.delete(
        `/bookings/${bookingId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking cancelled successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to cancel booking"
      );
    },
  });

  return {
    confirmBooking: confirmMutation.mutateAsync,
    cancelBooking: cancelMutation.mutateAsync,
    isConfirming: confirmMutation.isPending,
    isCancelling: cancelMutation.isPending,
  };
};