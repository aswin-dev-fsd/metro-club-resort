import { resortInfo } from "@/data/resortInfo";
import { roomsData } from "@/data/rooms";
import { amenitiesData } from "@/data/amenities";

export function ResortJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Resort",
    name: resortInfo.name,
    description: "A tranquil luxury resort in Sultanpet, Coimbatore offering premium rooms, swimming pool, turf, rain dance, banquet hall, campfire, and multi-cuisine restaurant.",
    url: "https://metroclubresort.in",
    telephone: resortInfo.phoneDisplay,
    priceRange: "₹₹ - ₹₹₹",
    image: [
      "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
      "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1/47 Puliyamarathupalayam, Varapatti",
      addressLocality: "Sultanpet, Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641658",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: resortInfo.geo.latitude,
      longitude: resortInfo.geo.longitude,
    },
    checkinTime: resortInfo.checkInTime,
    checkoutTime: resortInfo.checkOutTime,
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "365",
      bestRating: "5",
      worstRating: "1",
    },
    amenityFeature: amenitiesData.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.name,
      value: true,
    })),
    makesOffer: roomsData.map((room) => ({
      "@type": "Offer",
      name: room.name,
      price: room.pricePerNight,
      priceCurrency: "INR",
      description: room.description,
      availability: "https://schema.org/InStock",
      url: `https://metroclubresort.in/rooms/${room.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
