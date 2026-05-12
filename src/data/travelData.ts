import {
  cityKingston,
  cityAmman,
  cityAtlanta,
  cityVenice,
  cityVanish,
  listing01,
  listing02,
  listing03,
  listing04,
  listing05,
  avatar1,
  avatar2,
  avatar3,
  blog1,
  blog2,
  blog3,
  blog4,
} from "../assets/images";

// Categories
export interface Category {
  id: number;
  title: string;
  listingCount: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 1, title: "Appartment", listingCount: "99+ listings", icon: "home" },
  { id: 2, title: "Restaurant", listingCount: "55+ listings", icon: "utensils" },
  { id: 3, title: "Music", listingCount: "55+ listings", icon: "music" },
  { id: 4, title: "Shopping", listingCount: "80+ listings", icon: "shopping" },
  { id: 5, title: "TV Shows", listingCount: "96+ listings", icon: "tv" },
  { id: 6, title: "Gymnasiums", listingCount: "21+ listings", icon: "gym" },
];

// Process steps
export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: "1",
    title: "Input your location to start looking for landmarks.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra vitae quam integer semper.",
  },
  {
    id: 2,
    number: "2",
    title: "Make an appointment at the place you want to visit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra vitae quam integer.",
  },
  {
    id: 3,
    number: "3",
    title: "Visit the place and enjoy the experience.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra vitae quam integer aenean.",
  },
];

// Cities
export interface City {
  id: number;
  country: string;
  city: string;
  listingCount: string;
  image: string;
}

export const cities: City[] = [
  {
    id: 1,
    country: "Jamaica",
    city: "Kingston",
    listingCount: "100+ listings",
    image: cityKingston,
  },
  {
    id: 2,
    country: "Jordan",
    city: "Amman",
    listingCount: "80+ listings",
    image: cityAmman,
  },
  {
    id: 3,
    country: "USA",
    city: "Atlanta",
    listingCount: "120+ listings",
    image: cityAtlanta,
  },
  {
    id: 4,
    country: "France",
    city: "Venice City",
    listingCount: "90+ listings",
    image: cityVenice,
  },
  {
    id: 5,
    country: "Italy",
    city: "Vanish City",
    listingCount: "65+ listings",
    image: cityVanish,
  },
];

// Listing Cards
export interface Listing {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviewCount: string;
  description: string;
  price: string;
}

export const listings: Listing[] = [
  {
    id: 1,
    image: listing01,
    title: "Chuijhal Hotel And Restaurant",
    rating: 4.5,
    reviewCount: "2,391 reviews",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
    price: "$120/night",
  },
  {
    id: 2,
    image: listing02,
    title: "Luxury Beach Resort & Spa",
    rating: 4.8,
    reviewCount: "1,856 reviews",
    description:
      "Experience the finest luxury accommodations with world-class amenities.",
    price: "$250/night",
  },
  {
    id: 3,
    image: listing03,
    title: "Mountain View Lodge",
    rating: 4.3,
    reviewCount: "987 reviews",
    description:
      "Breathtaking mountain views combined with cozy, comfortable stays.",
    price: "$180/night",
  },
  {
    id: 4,
    image: listing04,
    title: "Downtown Business Hotel",
    rating: 4.6,
    reviewCount: "3,201 reviews",
    description:
      "Perfectly located in the city center with modern business facilities.",
    price: "$95/night",
  },
  {
    id: 5,
    image: listing05,
    title: "Heritage Boutique Inn",
    rating: 4.7,
    reviewCount: "1,124 reviews",
    description:
      "A charming boutique hotel blending historic architecture with modern comfort.",
    price: "$145/night",
  },
];

// Testimonials
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "This platform transformed my travel experience completely. Finding the perfect places has never been easier. The recommendations are spot-on and the interface is incredibly intuitive. I found amazing hidden gems I never would have discovered on my own.",
    author: "Sarah Johnson",
    role: "Travel Enthusiast",
    avatar: avatar1,
  },
  {
    id: 2,
    quote:
      "I've used many travel apps before, but this one stands out for its accuracy and comprehensive listings. The city guides are incredibly detailed and helped me navigate unfamiliar destinations with total confidence and ease.",
    author: "Michael Chen",
    role: "Digital Nomad",
    avatar: avatar2,
  },
  {
    id: 3,
    quote:
      "As a frequent traveler, I need reliable information fast. This platform delivers exactly that. The search functionality is powerful, and the results are always relevant. It has become my go-to resource for every trip I plan.",
    author: "Elena Rodriguez",
    role: "Business Traveler",
    avatar: avatar3,
  },
];

// Blog articles
export interface Article {
  id: number;
  image: string;
  category: string;
  title: string;
  author: string;
  authorAvatar: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    image: blog1,
    category: "Travel Tips",
    title: "Top Travel Destinations You Must Visit This Year",
    author: "James Wilson",
    authorAvatar: avatar1,
    date: "March 15, 2024",
  },
  {
    id: 2,
    image: blog2,
    category: "Food & Culture",
    title: "Discover the World Through Local Cuisine and Culture",
    author: "Emily Davis",
    authorAvatar: avatar2,
    date: "March 22, 2024",
  },
  {
    id: 3,
    image: blog3,
    category: "Adventure",
    title: "Get Ready for an Amazing Adventure in the Great Outdoors",
    author: "Alex Thompson",
    authorAvatar: avatar3,
    date: "April 1, 2024",
  },
  {
    id: 4,
    image: blog4,
    category: "Lifestyle",
    title: "The Art of Slow Travel: Experiencing Places Deeply",
    author: "Lisa Park",
    authorAvatar: avatar1,
    date: "April 8, 2024",
  },
];

// Footer links
export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "#" },
    { label: "Listings", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  categories: [
    { label: "Hotels", href: "#" },
    { label: "Restaurants", href: "#" },
    { label: "Shopping", href: "#" },
    { label: "Entertainment", href: "#" },
    { label: "Travel Guides", href: "#" },
  ],
};
