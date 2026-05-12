import type { LucideIcon } from "lucide-react"

export interface Photo {
  id: number | string;
  url: string;
  publicId?: string;
  listingId?: string;
}

export interface Listing {
  id: number | string;
  title: string;
  location: string;
  price?: number;
  pricePerNight?: number;
  rating?: number;
  superhost?: boolean;
  available?: boolean;
  img?: string;
  description: string;
  photos?: Photo[];
  guests?: number;
  type?: string;
  amenities?: string[];
  emenities?: string[];
  hostId?: string;
  ratings?: unknown[];
}

export interface Booking {
  id: string;
  listingId: string;
  listing: {
    id: string;
    title: string;
    location?: string;
    pricePerNight?: number;
    rating?: number;
    photos?: Photo[];
    hostId?: string;
  };
  guestId: string;
  guest: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
  };
  checkIn: string;
  checkOut: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role?: "GUEST" | "HOST" | string;
}

export interface Category {
  title: string;
  listings: number;
  Icon: LucideIcon;
  color: string; // Tailwind hex or class for the icon background
}