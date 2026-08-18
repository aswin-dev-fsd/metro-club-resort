export interface Amenity {
  id: string;
  name: string;
  category: "Recreation" | "Wellness" | "Dining" | "Event & Leisure";
  tagline: string;
  description: string;
  image: string;
  highlight?: boolean;
}

export const amenitiesData: Amenity[] = [
  {
    id: "campfire",
    name: "Camp Fire",
    category: "Recreation",
    tagline: "Gather around glowing embers under the starry night",
    description:
      "Gather around a glowing fire under the stars and create unforgettable memories. Whether it’s storytelling, music, or simply enjoying the warmth with your group, our campfire setup offers the perfect ambiance for families, couples, and friends to unwind and connect in a serene outdoor setting.",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/1-2-rjmizwxy5mqqophahlto01cxjzukbebt0yphv4w03s.jpg",
    highlight: true,
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    category: "Wellness",
    tagline: "Serene waters designed for family splashes & quiet laps",
    description:
      "Dive into our serene swimming pool designed for all our guests—from playful family splashes to peaceful swims for couples and solo travelers seeking calm and relaxation under the Coimbatore sun.",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/4-1-scaled-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpg",
    highlight: true,
  },
  {
    id: "turf",
    name: "Sports Turf Arena",
    category: "Recreation",
    tagline: "All-weather turf for cricket, football & casual matches",
    description:
      "Our well-maintained turf is perfect for sports lovers of all ages—ideal for friendly cricket and football matches, casual play, or fitness activities in a vibrant, open-air environment.",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/9-scaled-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpg",
    highlight: true,
  },
  {
    id: "rain-dance",
    name: "Rain Dance with Music",
    category: "Recreation",
    tagline: "Splash, dance, and groove under refreshing water showers",
    description:
      "Splash, dance, and let loose under a refreshing shower of water paired with lively beats—an exhilarating experience perfect for families, friends, and celebration groups.",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/Rain-Dance-with-Music-rjmizwxy5mqqophahlto01cxjzukbebt0yphv4w03s.jpg",
    highlight: true,
  },
  {
    id: "indoor-activities",
    name: "Indoor Games & Activities",
    category: "Recreation",
    tagline: "Table tennis, carrom, chess & board games for all ages",
    description:
      "Enjoy a lively selection of indoor games including table tennis, carrom, chess, board games, and group recreation—perfect for unwinding with friends and family during warm afternoons.",
    image: "/images/amenities/indoor-games-arena.webp",
    highlight: true,
  },
  {
    id: "conference-room",
    name: "Conference & Meeting Hall",
    category: "Event & Leisure",
    tagline: "Equipped setup for corporate meetings, workshops & presentations",
    description:
      "Host seamless business conferences, corporate retreats, team strategy sessions, and workshops with dedicated projector, audio-visual system, high-speed Wi-Fi, and customizable executive seating.",
    image: "/images/amenities/conference-hall.webp",
    highlight: true,
  },
  {
    id: "outdoor-lawn",
    name: "Lush Outdoor Lawn",
    category: "Event & Leisure",
    tagline: "Expansive natural greenery for picnics & open-air functions",
    description:
      "Relax or celebrate on our lush outdoor lawn—ideal for picnics, evening strolls, social gatherings, or simply soaking in nature’s charm with your loved ones in a peaceful green setting.",
    image: "/images/amenities/destination-wedding-lawn.webp",
  },
  {
    id: "banquet-hall",
    name: "Grand Banquet Hall",
    category: "Event & Leisure",
    tagline: "Spacious venue for weddings, reunions & corporate events",
    description:
      "Host unforgettable celebrations in our elegant banquet hall—perfect for weddings, birthdays, family reunions, or corporate events with spacious seating, stage lighting, and refined ambiance.",
    image: "/images/packages/grand-reception-lawn.webp",
    highlight: true,
  },
  {
    id: "restaurant",
    name: "Multi-Cuisine Restaurant",
    category: "Dining",
    tagline: "Delightful regional & multi-cuisine culinary journeys",
    description:
      "Savor a delightful culinary journey at our multi-cuisine restaurant—perfect for food lovers craving authentic South Indian flavors, rich tandoori dishes, and fresh chef-crafted meals.",
    image: "/images/amenities/multi-cuisine-restaurant.webp",
    highlight: true,
  },
  {
    id: "horse-cart",
    name: "Horse Cart Ride",
    category: "Recreation",
    tagline: "Scenic traditional rides around the lush grounds",
    description:
      "Hop on for a breezy horse-cart ride and enjoy the charm of slow, scenic travel across the resort’s picturesque countryside campus.",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-11-18-at-2.29.01-PM-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpeg",
  },
  {
    id: "kids-play-area",
    name: "Kids Play Area",
    category: "Recreation",
    tagline: "Safe, cheerful outdoor play equipment for little ones",
    description:
      "Where little ones laugh, explore, and play all day with swings, slides, and secure soft play installations while parents relax nearby.",
    image: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-11-18-at-2.28.52-PM-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpeg",
  },
];
