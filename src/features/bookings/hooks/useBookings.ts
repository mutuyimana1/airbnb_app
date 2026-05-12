import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import type { Booking } from "@/types";

export const useBookings = () => {
  const { data: bookings = [], isLoading, isError, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await axiosInstance.get<Booking[]>("/bookings");
      return response.data;
    },
  });

  return { bookings, isLoading, isError, error };
};
