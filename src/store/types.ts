import type { Listing } from "@/types";

export interface State {
  listings: Listing[];
  loading: boolean;
  filter: string;
  saved: Array<number | string>;
}

export type Action =
  | { type: "SET_LISTINGS"; payload: Listing[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_FILTER"; payload: string }
  | { type: "TOGGLE_FAVORITE"; payload: number | string };
