import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import type { Listing } from "@/types";

export const useSavedListings = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["saved"],
    queryFn: async () => {
      const response = await axiosInstance.get<Listing[]>("/saved");
      return response.data;
    },
  });

  return { data: data ?? [], isLoading, isError };
};