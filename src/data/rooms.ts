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
      "Complimentary High-Speed WiFi",
      "Air Conditioning",
      "LED TV with Satellite Channels",
      "Complimentary Breakfast",
      "En-suite Bathroom with Hot Water",
      "Free Parking",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I am interested in booking the Standard Room (₹2,499/night, 2 Adults). Please share availability and check-in details.",
  },
  {
    id: "deluxe-double-room",
    slug: "deluxe-double-room",
    name: "Deluxe Double Room",
    tagline: "Spacious luxury with premium countryside views",
    size: "350 sq.ft.",
    maxOccupancy: "2 Adults",
    pricePerNight: 3999,
    bedType: "King Size Bed",
    image: "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
    gallery: [
      "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg",
    ],
    description:
      "Our Deluxe Double Room offers extra space to stretch out and unwind. Featuring bespoke wood accents, expansive seating, and large glass windows framing Coimbatore's lush landscape, it promises an elevated resort stay.",
    amenities: [
      "Complimentary High-Speed WiFi",
      "King Plush Bedding",
      "Smart LED TV",
      "Complimentary Gourmet Breakfast",
      "Premium Toiletries & Bathrobes",
      "Coffee & Tea Maker",
      "24/7 Room Service",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I am interested in booking the Deluxe Double Room (₹3,999/night, 2 Adults). Please share availability and packages.",
  },
  {
    id: "double-room-balcony",
    slug: "double-room-balcony",
    name: "Double Room with Balcony",
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
      "Private Scenic Balcony with Seating",
      "Complimentary High-Speed WiFi",
      "King Plush Bedding",
      "Smart TV & Sound System",
      "Complimentary Breakfast & Welcome Drink",
      "Rain Shower Experience",
      "Minibar & Tea Set",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I would like to book the Double Room with Balcony (₹5,499/night). Please let me know the available dates.",
  },
  {
    id: "suite-pool-view",
    slug: "suite-pool-view",
    name: "Suite with Pool View",
    tagline: "The ultimate family luxury suite with direct pool vista",
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
      "Our premier accommodation for families and groups. The Suite with Pool View features a spacious master bedroom, separate lounge, panoramic pool vistas, and VIP concierge assistance to ensure a memorable stay.",
    amenities: [
      "Panoramic Swimming Pool Views",
      "Expansive Living Area & Dining Nook",
      "Accommodates up to 4 Adults Comfortably",
      "Complimentary Breakfast & Poolside Refreshments",
      "Ultra-Fast WiFi",
      "Dedicated Concierge Support",
      "Premium Ensuite Bathroom with Bathtub",
    ],
    whatsappMessage:
      "Hello Metro Club Resort! I am looking to book the Suite with Pool View (₹6,999/night, up to 4 Adults). Please share availability and booking details.",
  },
];
