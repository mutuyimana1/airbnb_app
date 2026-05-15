export const navItems = [
  { name: "Home", hasDropdown: false ,page:"/"},
  { name: "Listing", hasDropdown: false ,page:"/listings"},
  { name: "Bookings", hasDropdown: false ,page:"/bookings",roles:["GUEST"]},
  { name: "Dashboard", hasDropdown: false ,page:"/dashboard",roles:["HOST","ADMIN"]},
];
export const places = [
  {
    id: 1,
    title: "Gisozi Apartment",
    image: "https://plus.unsplash.com/premium_photo-1688137879530-873373c077e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 2391,
    featured: true,
    priceOff: "$100",
    description: "Beautiful apartment in a quiet neighborhood."
  },
  {
    id: 2,
    title: "Muhazi Hotel & Restaurant",
    image: "https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 2391,
    discount: "10%",
    priceOff: "$100",
    description: "Delicious food and excellent service."
  },
  {
    id: 3,
    title: "Radisson Hotel",
    image: "https://plus.unsplash.com/premium_photo-1688137879530-873373c077e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 2391,
    discount: "10%",
    priceOff: "$100",
    description: "Luxurious hotel with excellent amenities."
  },
  {
    id: 4,
    title: "Hotel des Mille Collines",
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 2391,
    discount: "10%",
    priceOff: "$100",
    description: "Experience the best of Kigali at this historic hotel."
  },

];