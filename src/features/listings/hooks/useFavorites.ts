import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { useStore } from "@/store/StoreContext";

export const useFavorites = () => {
  const {
    state: { saved },
    dispatch,
  } = useStore();

  const isSaved = useCallback(
    (id: number | string) => saved.includes(id),
    [saved],
  );

  const toggle = useCallback(
    (id: number | string, title: string) => {
      const adding = !saved.includes(id);
      dispatch({ type: "TOGGLE_FAVORITE", payload: id });

      toast(adding ? `Saved: ${title}` : `Removed: ${title}`);
    },
    [dispatch, saved],
  );

  return {
    toggle,
    count: saved.length,
    isSaved,
  };
};
