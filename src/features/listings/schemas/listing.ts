import { z } from "zod";

export const listingBasicSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title too long"),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000, "Description too long"),
  pricePerNight: z.number().positive("Price must be greater than 0"),
  location: z.string().min(2, "Location is required"),
  guests: z.number().int().min(1, "Guests must be between 1 and 16").max(16, "Guests must be between 1 and 16"),
});

export type ListingBasic = z.infer<typeof listingBasicSchema>;
