import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import type { Listing } from "@/types";

export const useListing = (id?: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["listing", id],
    queryFn: async () => {
      const response = await axiosInstance.get<Listing>(`/listings/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  return { data, isLoading, isError, error };
};
