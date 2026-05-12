import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BookingPersonal } from "../schemas/booking";

interface StepPersonalProps {
  onNext: () => void;
  onBack: () => void;
}

export const StepPersonal = ({ onNext, onBack }: StepPersonalProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<BookingPersonal & { profilePhoto?: FileList }>();

  const [preview, setPreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File must not exceed 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = async () => {
    const isValid = await trigger(["name", "email", "phone"]);
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Personal Info</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Full Name</label>
        <Input
          type="text"
          {...register("name")}
          className="w-full border-gray-200 rounded-lg px-4 py-2 focus-visible:ring-0 focus-visible:border-[#FF5A5F] focus-visible:ring-0"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Email</label>
        <Input
          type="email"
          {...register("email")}
          className="w-full border-gray-200 rounded-lg px-4 py-2 focus-visible:ring-0 focus-visible:border-[#FF5A5F] focus-visible:ring-0"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Phone</label>
        <Input
          type="tel"
          {...register("phone")}
          className="w-full border-gray-200 rounded-lg px-4 py-2 focus-visible:ring-0 focus-visible:border-[#FF5A5F] focus-visible:ring-0"
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

     <div className="space-y-3">
  <label className="block text-sm font-semibold text-gray-700">
    Profile Photo
  </label>
  
  <div className="group relative">
    <Input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="cursor-pointer border-gray-200 bg-white transition-all 
                 file:mr-4 file:cursor-pointer file:border-0 file:bg-gray-100 
                 file:px-4 file:py-2 file:text-sm file:font-semibold 
                 file:text-gray-700 hover:file:bg-[#FF5A5F] hover:file:text-white 
                 focus-visible:ring-1 focus-visible:ring-[#FF5A5F] focus-visible:border-[#FF5A5F]"
    />
  </div>

  {fileError && (
    <p className="text-xs font-medium text-red-500 animate-pulse">
      {fileError}
    </p>
  )}

  {preview && (
    <div className="mt-4 flex items-center gap-4 p-3 border border-gray-100 rounded-xl bg-gray-50/50">
      <div className="relative size-20 shrink-0">
        <img
          src={preview}
          alt="Profile preview"
          className="size-full rounded-full object-cover ring-2 ring-white shadow-sm"
        />
      </div>
    </div>
  )}
</div>


      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 rounded-lg py-2 font-semibold border-gray-200 hover:bg-gray-50 shadow-none"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="flex-1 bg-[#FF5A5F] hover:bg-[#e04f54] text-white rounded-lg py-2 font-semibold border-none shadow-none"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
