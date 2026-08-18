export interface GalleryItem {
  id: string;
  title: string;
  category: "Rooms" | "Pool & Water" | "Activities" | "Dining & Events";
  image: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    title: "Deluxe Room Comfort",
    category: "Rooms",
    image: "/images/rooms/deluxe/deluxe-room-bed-main.webp",
  },
  {
    id: "g-2",
    title: "Lush Destination Wedding Lawn",
    category: "Activities",
    image: "/images/amenities/destination-wedding-lawn.webp",
  },
  {
    id: "g-3",
    title: "Balcony Room View",
    category: "Rooms",
    image: "/images/rooms/deluxe-balcony/deluxe-balcony-primary.webp",
  },
  {
    id: "g-4",
    title: "Swimming Pool Oasis",
    category: "Pool & Water",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/4-1-scaled-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpg",
  },
  {
    id: "g-5",
    title: "Rain Dance with Music",
    category: "Pool & Water",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/Rain-Dance-with-Music-rjmizwxy5mqqophahlto01cxjzukbebt0yphv4w03s.jpg",
  },
  {
    id: "g-6",
    title: "Sports Turf Arena",
    category: "Activities",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/9-scaled-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpg",
  },
  {
    id: "g-7",
    title: "Campfire Evenings",
    category: "Activities",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/1-2-rjmizwxy5mqqophahlto01cxjzukbebt0yphv4w03s.jpg",
  },
  {
    id: "g-8",
    title: "Multi-Cuisine Dining",
    category: "Dining & Events",
    image: "/images/amenities/multi-cuisine-restaurant.webp",
  },
  {
    id: "g-9",
    title: "Grand Banquet & Conference Hall",
    category: "Dining & Events",
    image: "/images/amenities/conference-hall.webp",
  },
  {
    id: "g-10",
    title: "Horse Cart Country Ride",
    category: "Activities",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-11-18-at-2.29.01-PM-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpeg",
  },
  {
    id: "g-11",
    title: "Indoor Games Arena",
    category: "Activities",
    image: "/images/amenities/indoor-games-arena.webp",
  },
  {
    id: "g-12",
    title: "Kids Play Zone",
    category: "Activities",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-11-18-at-2.28.52-PM-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpeg",
  },
  {
    id: "g-13",
    title: "Corporate Day Out Gatherings",
    category: "Activities",
    image: "/images/packages/corporate-day-out.webp",
  },
  {
    id: "g-14",
    title: "Grand Reception & Party Lawns",
    category: "Dining & Events",
    image: "/images/packages/grand-reception-lawn.webp",
  },
  {
    id: "g-15",
    title: "Standard Room Comfort",
    category: "Rooms",
    image: "/images/rooms/standard/standard-room-primary.webp",
  },
  {
    id: "g-16",
    title: "Zen Buddha Garden Courtyard",
    category: "Activities",
    image: "/images/rooms/standard/standard-room-garden-courtyard.webp",
  },
];
