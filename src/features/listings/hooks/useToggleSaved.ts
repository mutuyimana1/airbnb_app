import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

export const useToggleSaved = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (listingId: string) => {
      const response = await axiosInstance.post(`/saved/${listingId}`);
      return response.data;
    },
    onMutate: async (listingId: string) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["saved"] });

      // Snapshot the previous value
      const previousSaved = queryClient.getQueryData<string[]>(["saved"]);

      // Optimistically update the cache
      queryClient.setQueryData<string[]>(["saved"], (old) => {
        if (!old) return [listingId];
        return old.includes(listingId)
          ? old.filter((id) => id !== listingId)
          : [...old, listingId];
      });

      return { previousSaved };
    },
    onError: (_err, _listingId, context) => {
      // Roll back on error
      if (context?.previousSaved) {
        queryClient.setQueryData(["saved"], context.previousSaved);
      }
    },
    onSettled: () => {
      // Revalidate the cache
      queryClient.invalidateQueries({ queryKey: ["saved"] });
    },
  });

  return mutation;
};
