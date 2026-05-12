import { useEffect, useMemo, useRef } from "react";
import debounce from "lodash/debounce";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useStore } from "@/store/StoreContext";

export default function AirbnbSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useStore();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const debouncedDispatch = useMemo(
    () =>
      debounce((query: string) => {
        dispatch({ type: "SET_FILTER", payload: query });
      }, 300),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  return (
    <div className="flex flex-col items-center justify-center pt-20 gap-4">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white rounded-full shadow-lg border border-gray-200 p-2 gap-1">
        <Button className="bg-[#FF5A5F] hover:bg-[#e04f54] text-white rounded-full px-6 py-6 text-md font-medium shrink-0">
          Search places
        </Button>

        <div className="hidden md:block h-8 w-px bg-gray-200 mx-2" />

        <NativeSelect className="focus-visible:ring-0 text-black">
          <NativeSelectOption value="">Select location</NativeSelectOption>
          <NativeSelectOption value="kigali">Kigali</NativeSelectOption>
          <NativeSelectOption value="muhanga">Muhanga</NativeSelectOption>
        </NativeSelect>

        <div className="hidden md:block h-8 w-[1px] bg-gray-200 mx-2" />

        <div className="flex-[2] flex items-center px-2 gap-2">
          <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
          <div className="relative w-full">
            <Input
              ref={inputRef}
              type="text"
              placeholder="What are you looking for?"
              onChange={(event) => debouncedDispatch(event.target.value)}
              className="border-none focus-visible:ring-0 text-black shadow-none text-base placeholder:text-gray-400"
            />
            <div className="absolute right-0 bottom-0 h-[1px] w-full bg-red-200/50" />
          </div>
          <Search className="h-5 w-5 text-gray-600 ml-2 cursor-pointer hover:text-black transition-colors" />
        </div>
      </div>
    </div>
  );
}
