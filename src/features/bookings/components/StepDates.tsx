import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { BookingDates } from "../schemas/booking";

interface StepDatesProps {
  onNext: () => void;
}

export const StepDates = ({ onNext }: StepDatesProps) => {
  const {
    control,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext<BookingDates>();

  const handleContinue = async () => {
    const isValid = await trigger(["checkIn", "checkOut"]);
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      {/* <h2 className="text-2xl font-bold">Select Dates</h2> */}

      {/* Check-in Date */}
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Check-in Date</label>
        <Controller
          control={control}
          name="checkIn"
          render={({ field }) => (
             <Popover>
               <PopoverTrigger asChild>
                 <Button
                   variant="outline"
                   className={cn(
                     "w-full justify-start text-left font-normal border-gray-200 rounded-lg px-4 py-2",
                     !field.value && "text-muted-foreground",
                   )}
                 >
                   <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                   {field.value ? (
                     format(new Date(field.value), "PPP")
                   ) : (
                     <span>Pick a date</span>
                   )}
                 </Button>
               </PopoverTrigger>
               <PopoverContent className="w-auto p-4 z-[9999] align-start" sideOffset={4}>
                 <Calendar
                   mode="single"
                   selected={field.value ? new Date(field.value) : undefined}
                   onSelect={(date) => field.onChange(date?.toISOString())}
                   // Disable all dates before today
                   disabled={(date) =>
                     date < new Date(new Date().setHours(0, 0, 0, 0))
                   }
                   initialFocus
                 />
               </PopoverContent>
             </Popover>
          )}
        />
        {errors.checkIn && (
          <p className="text-xs text-red-500">{errors.checkIn.message}</p>
        )}
      </div>

      {/* Check-out Date */}
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Check-out Date</label>
        <Controller
          control={control}
          name="checkOut"
          render={({ field }) => (
             <Popover>
               <PopoverTrigger asChild>
                 <Button
                   variant="outline"
                   className={cn(
                     "w-full justify-start text-left font-normal border-gray-200 rounded-lg px-4 py-2",
                     !field.value && "text-muted-foreground",
                   )}
                 >
                   <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                   {field.value ? (
                     format(new Date(field.value), "PPP")
                   ) : (
                     <span>Pick a date</span>
                   )}
                 </Button>
               </PopoverTrigger>
               <PopoverContent className="w-auto p-4 z-[9999] align-start" sideOffset={4}>
                 <Calendar
                   mode="single"
                   selected={field.value ? new Date(field.value) : undefined}
                   onSelect={(date) => field.onChange(date?.toISOString())}
                   disabled={(date) => {
                     const checkIn = watch("checkIn");
                     return checkIn ? date < new Date(checkIn) : false;
                   }}
                   initialFocus
                 />
               </PopoverContent>
             </Popover>
          )}
        />
        {errors.checkOut && (
          <p className="text-xs text-red-500">{errors.checkOut.message}</p>
        )}
      </div>

      <Button
        onClick={handleContinue}
        className="w-full bg-[#FF5A5F] hover:bg-[#e04f54] text-white rounded-lg py-2 font-semibold border-none"
      >
        Continue
      </Button>
    </div>
  );
};
