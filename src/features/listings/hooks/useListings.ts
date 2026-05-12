import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@/store/StoreContext";
import axiosInstance from "@/lib/axios";
import type { Listing } from "@/types";

export const useListings = () => {
  const { dispatch } = useStore();

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["listings"],
    queryFn: async () => {
      const response = await axiosInstance.get<Listing[]>("/listings");
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_LISTINGS", payload: data });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: isLoading || isFetching });
  }, [isLoading, isFetching, dispatch]);

  return { data, isLoading, isError, isFetching };
};
