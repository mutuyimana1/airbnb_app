import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Plus } from "lucide-react";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import { useAuth } from "@/components/features/auth/hooks/useAuth";
import { listingBasicSchema } from "../schemas/listing";

type Step = "basic" | "amenities" | "gallery";

interface BasicInfoData {
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  guests: number;
}

interface PhotoFile {
  file: File;
  preview: string;
}

interface AddListingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Common amenities list
const COMMON_AMENITIES = [
  "WiFi",
  "Pool",
  "Air Conditioning",
  "Kitchen",
  "Free Parking",
  "TV",
  "Washer",
  "Heating",
  "Breakfast",
  "Gym",
  "Pet Friendly",
  "Balcony",
  "Garden",
  "BBQ",
  "Fireplace",
  "Hot Tub",
  "Beach Access",
  "Mountain View",
  "Family Friendly",
  "Workspace",
];

export const AddListingModal = ({
  isOpen = false,
  onClose,
}: AddListingModalProps) => {
  const [currentStep, setCurrentStep] = useState<Step>("basic");
  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    title: "",
    description: "",
    pricePerNight: 0,
    location: "",
    guests: 1,
  });
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [customAmenity, setCustomAmenity] = useState<string>("");
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [createdListingId, setCreatedListingId] = useState<string | null>(null);

  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Create listing mutation - called on amenities step
  const createListingMutation = useMutation({
    mutationFn: async (data: BasicInfoData) => {
      const response = await axiosInstance.post("/listings", {
        title: data.title,
        description: data.description,
        pricePerNight: data.pricePerNight,
        location: data.location,
        guests: data.guests,
        emenities: selectedAmenities,
        hostId: user?.id,
      });
      return response.data;
    },
    onSuccess: (data) => {
      // Store listing ID and move to gallery step for photo upload
      setCreatedListingId(data.id);
      setCurrentStep("gallery");
      toast.success("Listing created! Now upload photos.");
    },
    onError: () => {
      toast.error("Failed to create listing. Please try again.");
    },
  });

  // Upload photos mutation - called on gallery step
  const uploadPhotosMutation = useMutation({
    mutationFn: async () => {
      if (!createdListingId || photos.length === 0) return;

      const uploadPromises = photos.map(async (photo, index) => {
        try {
          const formData = new FormData();
          formData.append("photos", photo.file);
          const response = await axiosInstance.post(
            `/users/listings/${createdListingId}/photos`,
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            },
          );
          return { index, success: true, response };
        } catch (error) {
          return { index, success: false, error };
        }
      });

      const results = await Promise.allSettled(uploadPromises);
      const successfulUploads = results.filter(result =>
        result.status === 'fulfilled' && result.value.success
      ).length;
      const failedUploads = results.filter(result =>
        result.status === 'rejected' || (result.status === 'fulfilled' && !result.value.success)
      ).length;

      if (successfulUploads > 0) {
        toast.success(`${successfulUploads} photo(s) uploaded successfully!`);
      }

      if (failedUploads > 0) {
        toast.error(`${failedUploads} photo(s) failed to upload.`);
      }

      return { successfulUploads, failedUploads };
    },
    onSuccess: (result) => {
      // Always close modal since listing was created, even if some photos failed
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["listings"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-listings"] });
    },
    onError: (error) => {
      console.error("Photo upload error:", error);
      // Still close modal since listing was created
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["listings"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-listings"] });
      toast.error("Photo upload process failed.");
    },
  });

  // Validate basic info with zod
  const validateBasicInfo = (data: BasicInfoData) => {
    try {
      listingBasicSchema.parse({
        title: data.title,
        description: data.description,
        pricePerNight: data.pricePerNight,
        location: data.location,
        guests: data.guests,
      });
      return true;
    } catch (error: any) {
      const errors = error.errors?.[0]?.message || "Validation error";
      toast.error(errors);
      return false;
    }
  };

  const handleNext = () => {
    if (currentStep === "basic") {
      if (!validateBasicInfo(basicInfo)) {
        return;
      }
      setCurrentStep("amenities");
    } else if (currentStep === "amenities") {
      // Create listing and move to gallery for photo upload
      createListingMutation.mutate(basicInfo);
    }
  };

  const handleBack = () => {
    if (currentStep === "gallery") {
      setCurrentStep("amenities");
    } else if (currentStep === "amenities") {
      setCurrentStep("basic");
    }
  };

  const handleClose = () => {
    resetForm();
    if (onClose) onClose();
  };

  const resetForm = () => {
    // Revoke photo preview URLs
    photos.forEach((photo) => URL.revokeObjectURL(photo.preview));
    setCurrentStep("basic");
    setBasicInfo({
      title: "",
      description: "",
      pricePerNight: 0,
      location: "",
      guests: 1,
    });
    setSelectedAmenities([]);
    setCustomAmenity("");
    setPhotos([]);
  };

  const handleSubmit = () => {
    // Upload photos to the created listing
    if (!createdListingId) {
      toast.error("Listing was not created properly.");
      return;
    }
    uploadPhotosMutation.mutate();
  };

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const handleAddCustomAmenity = () => {
    if (customAmenity.trim() === "") {
      toast.error("Please enter an amenity name.");
      return;
    }
    if (selectedAmenities.includes(customAmenity.trim())) {
      toast.error("This amenity is already added.");
      return;
    }
    setSelectedAmenities((prev) => [...prev, customAmenity.trim()]);
    setCustomAmenity("");
    toast.success("Amenity added!");
  };

  const removeCustomAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => prev.filter((a) => a !== amenity));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos: PhotoFile[] = [];
      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          newPhotos.push({
            file,
            preview: URL.createObjectURL(file),
          });
        }
      });
      setPhotos((prev) => [...prev, ...newPhotos].slice(0, 10)); // Max 10 photos
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const newPhotos = [...prev];
      URL.revokeObjectURL(newPhotos[index].preview);
      newPhotos.splice(index, 1);
      return newPhotos;
    });
  };

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      photos.forEach((photo) => URL.revokeObjectURL(photo.preview));
    };
  }, [photos]);

  if (!isOpen) {
    return null;
  }

  const isSubmitting = createListingMutation.isPending;
  const totalSteps = 3;
  const stepIndex =
    currentStep === "basic" ? 0 : currentStep === "amenities" ? 1 : 2;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] animate-in fade-in duration-300"
        onClick={handleClose}
      />
      {/* Modal Container */}
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto">
        <Card
          className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20"
            aria-label="Close modal"
          >
            <X className="size-6" />
          </button>

          {/* Step Indicators */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === stepIndex
                      ? "w-8 bg-[#FF5A5F]"
                      : index < stepIndex
                        ? "w-4 bg-[#FF5A5F]/40"
                        : "w-4 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {stepIndex + 1} / {totalSteps}
            </span>
          </div>

          {/* Step Content */}
          <div className="p-8">
            {currentStep === "basic" ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Basic Information
                </h2>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={basicInfo.title}
                    onChange={(e) =>
                      setBasicInfo((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="e.g., Beautiful beachfront villa"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    value={basicInfo.description}
                    onChange={(e) =>
                      setBasicInfo((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Describe your property..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Price per Night ($){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="number"
                      value={basicInfo.pricePerNight}
                      onChange={(e) =>
                        setBasicInfo((prev) => ({
                          ...prev,
                          pricePerNight: parseFloat(e.target.value) || 0,
                        }))
                      }
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      value={basicInfo.location}
                      onChange={(e) =>
                        setBasicInfo((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                      placeholder="e.g., Miami, Florida"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="number"
                    value={basicInfo.guests}
                    onChange={(e) =>
                      setBasicInfo((prev) => ({
                        ...prev,
                        guests: parseInt(e.target.value) || 1,
                      }))
                    }
                    placeholder="1"
                    min="1"
                    max="16"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    onClick={handleClose}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-[#FF5A5F] hover:bg-[#e04f54] text-white"
                  >
                    Next: Amenities
                  </Button>
                </div>
              </div>
            ) : currentStep === "amenities" ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Select Amenities
                </h2>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Choose from our list
                  </label>
                  <div className="flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-2">
                    {COMMON_AMENITIES.map((amenity) => {
                      const isSelected = selectedAmenities.includes(amenity);
                      return (
                        <label
                          key={amenity}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-[#FF5A5F] border-[#FF5A5F] text-white"
                              : "bg-gray-50 border-gray-200 hover:border-[#FF5A5F] hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleAmenityToggle(amenity)}
                            className="w-4 h-4 rounded border-gray-300 text-[#FF5A5F] focus:ring-[#FF5A5F] focus:ring-offset-0"
                          />
                          <span className="text-sm font-medium">{amenity}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Add Other Amenities
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={customAmenity}
                      onChange={(e) => setCustomAmenity(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddCustomAmenity();
                        }
                      }}
                      placeholder="e.g., Smart TV, Projector"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      onClick={handleAddCustomAmenity}
                      className="bg-[#FF5A5F] hover:bg-[#e04f54] text-white px-4"
                    >
                      <Plus size={18} />
                    </Button>
                  </div>

                  {selectedAmenities.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase text-gray-500">
                        Selected Amenities ({selectedAmenities.length})
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAmenities.map((amenity) => (
                          <div
                            key={amenity}
                            className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm"
                          >
                            <span>{amenity}</span>
                            <button
                              type="button"
                              onClick={() => removeCustomAmenity(amenity)}
                              className="text-gray-500 hover:text-red-500 transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-[#FF5A5F] hover:bg-[#e04f54] text-white"
                  >
                    Next: Gallery
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Property Gallery
                </h2>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#FF5A5F] transition-colors">
                    <input
                      type="file"
                      id="photo-upload"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <div className="text-gray-400 mb-2">
                        <svg
                          className="w-12 h-12 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">
                        Click to upload images (max 10)
                      </p>
                    </label>
                  </div>

                  {photos.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={photo.preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-[#FF5A5F] hover:bg-[#e04f54] text-white"
                    disabled={isSubmitting || uploadPhotosMutation.isPending}
                  >
                    {uploadPhotosMutation.isPending
                      ? "Uploading..."
                      : "Complete Listing"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};
