export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  size: string;
  maxOccupancy: string;
  pricePerNight: number;
  bedType: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  whatsappMessage: string;
}

export const roomsData: Room[] = [
  {
    id: "standard-room",
    slug: "standard-room",
    name: "Standard Room",
    tagline: "Cozy & serene comfort for couples or solo travelers",
    size: "200 sq.ft.",
    maxOccupancy: "2 Adults",
    pricePerNight: 2499,
    bedType: "Queen Size Bed",
    image: "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
    gallery: [
      "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg",
    ],
    description:
      "Designed with an emphasis on calm elegance, our Standard Room provides a peaceful sanctuary equipped with modern comforts, premium linens, and garden-view windows. Perfect for short getaways and weekend relaxation.",
    amenities: [
      "High-Speed WiFi",
      "Kettle and Breakfast Included",
      "Air Conditioning",
      "LED TV with Satellite Channels",
      "En-suite Bathroom with Hot Water",
      "Free Parking",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I am interested in booking the Standard Room (₹2,499/night, 2 Adults). Please share availability and check-in details.",
  },
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Spacious luxury with premium countryside views",
    size: "350 sq.ft.",
    maxOccupancy: "2 Adults",
    pricePerNight: 4499,
    bedType: "King Size Bed",
    image: "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
    gallery: [
      "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg",
    ],
    description:
      "Our Deluxe Room offers extra space to stretch out and unwind. Featuring bespoke wood accents, expansive seating, and large glass windows framing Coimbatore's lush landscape, it promises an elevated resort stay.",
    amenities: [
      "High-Speed WiFi",
      "Kettle and Breakfast Included",
      "King Plush Bedding",
      "Smart LED TV",
      "Premium Toiletries & Bathrobes",
      "24/7 Room Service",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I am interested in booking the Deluxe Room (₹4,499/night, 2 Adults). Please share availability and packages.",
  },
  {
    id: "deluxe-room-balcony",
    slug: "deluxe-room-balcony",
    name: "Deluxe Room with Balcony",
    tagline: "Private outdoor balcony overlooking green lawns",
    size: "450 sq.ft.",
    maxOccupancy: "2 Adults",
    pricePerNight: 5499,
    bedType: "King Size Bed + Balcony Lounge",
    image: "https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg",
    gallery: [
      "https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
    ],
    description:
      "Wake up to fresh morning breezes and birdsong on your private furnished balcony. This generous room blends contemporary interior finishes with open-air luxury, making it a favorite for couples and honeymooners.",
    amenities: [
      "High-Speed WiFi",
      "Kettle and Breakfast Included",
      "Private Scenic Balcony with Seating",
      "King Plush Bedding",
      "Smart TV & Sound System",
      "Rain Shower Experience",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I would like to book the Deluxe Room with Balcony (₹5,499/night). Please let me know the available dates.",
  },
  {
    id: "master-room-pool-view",
    slug: "master-room-pool-view",
    name: "Master Room with Pool View",
    tagline: "The ultimate luxury master room with direct pool vista",
    size: "600 sq.ft.",
    maxOccupancy: "4 Adults",
    pricePerNight: 6999,
    bedType: "2 King Size Beds / Separate Living Lounge",
    image: "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
    gallery: [
      "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
    ],
    description:
      "Our premier accommodation for families and groups. The Master Room with Pool View features a spacious master bedroom, separate lounge, panoramic pool vistas, and VIP concierge assistance to ensure a memorable stay.",
    amenities: [
      "High-Speed WiFi",
      "Kettle and Breakfast Included",
      "Panoramic Swimming Pool Views",
      "Expansive Living Area & Dining Nook",
      "Accommodates up to 4 Adults Comfortably",
      "Dedicated Concierge Support",
      "Premium Ensuite Bathroom with Bathtub",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I am looking to book the Master Room with Pool View (₹6,999/night, up to 4 Adults). Please share availability and booking details.",
  },
];
