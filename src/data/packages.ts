export const IMAGES = {
  pool: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/4-1-scaled-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpg",
  rainDance: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/Rain-Dance-with-Music-rjmizwxy5mqqophahlto01cxjzukbebt0yphv4w03s.jpg",
  banquet: "/images/amenities/conference-hall.webp",
  lawn: "/images/amenities/destination-wedding-lawn.webp",
  restaurant: "/images/amenities/multi-cuisine-restaurant.webp",
  turf: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/9-scaled-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpg",
  campfire: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/1-2-rjmizwxy5mqqophahlto01cxjzukbebt0yphv4w03s.jpg",
  kids: "https://metroclubresort.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-11-18-at-2.28.52-PM-rjmizxvscgs10bfxc48akj4e5dpxj3fjd3czceulxk.jpeg",
  corporateDayOut: "/images/packages/corporate-day-out.webp",
  corporateStay: "/images/packages/corporate-stay.webp",
  friendsDayOut: "/images/packages/friends-day-out.webp",
  collegeDayOut: "/images/packages/college-day-out.webp",
  receptionLawn: "/images/packages/grand-reception-lawn.webp",
  outdoorLawn: "/images/packages/outdoor-green-lawn.webp",
};

export const CORPORATE_DAY_OUT = [
  "Welcome Drink",
  "Team Building Activities",
  "Breakfast (Optional)",
  "Lunch Buffet",
  "Swimming Pool with Music",
  "Rain Dance with Music",
  "Indoor Games",
  "Horse Cart Ride",
  "Turf",
  "Conference Setup",
  "Sound System",
  "Evening Hi-Tea",
  "Group Activities",
  "Employee Engagement",
  "Parking",
  "Professional Event Support",
];

export const CORPORATE_STAY = [
  "Luxury Accommodation",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Conference Hall",
  "Meeting Setup",
  "Team Activities",
  "Campfire",
  "Morning Tea",
  "Swimming Pool with Music",
  "Rain Dance with Music",
  "Indoor Games",
  "Horse Cart Ride",
  "Late Checkout (Subject to Availability)",
];

export type DayOutPackage = {
  name: string;
  subtitle: string;
  image: string;
  inclusions?: string[];
  description?: string;
};

const BASE_INCLUSIONS = [
  "Welcome Drink",
  "Buffet Lunch",
  "Swimming Pool with Music",
  "Rain Dance with Music",
  "Indoor Games",
  "Evening Hi-Tea",
  "Free Parking",
];

export const DAY_OUT_PACKAGES: DayOutPackage[] = [
  {
    name: "Family Day Out",
    subtitle: "For weekends that feel longer than they are",
    image: IMAGES.pool,
    inclusions: [...BASE_INCLUSIONS, "Kids Play Area", "Horse Cart Ride"],
  },
  {
    name: "Corporate Day Out",
    subtitle: "Team building, minus the awkwardness",
    image: IMAGES.corporateDayOut,
    inclusions: [...BASE_INCLUSIONS, "Team Building Activities", "Conference Setup", "Turf"],
  },
  {
    name: "Friends Package",
    subtitle: "Turf in the morning, campfire at night",
    image: IMAGES.friendsDayOut,
    inclusions: [...BASE_INCLUSIONS, "Turf", "Music & DJ", "Campfire (add-on)"],
  },
  {
    name: "School Package",
    subtitle: "Supervised, safe and genuinely fun",
    image: IMAGES.kids,
    inclusions: [...BASE_INCLUSIONS, "Supervised Activities", "Lifeguard on Duty", "Bus Parking"],
  },
  {
    name: "College Package",
    subtitle: "Big groups, big day",
    image: IMAGES.collegeDayOut,
    inclusions: [...BASE_INCLUSIONS, "DJ & Sound", "Turf"],
  },
  {
    name: "Photoshoot Package",
    subtitle: "Pre-wedding, fashion & portfolio shoots",
    image: IMAGES.lawn,
    description:
      "A picturesque countryside destination for pre-wedding, post-wedding, fashion, and portfolio photoshoots. Enjoy full access to scenic lush green lawns, swimming pool backdrops, rustic aesthetic zones, and private changing rooms for a smooth, creative shoot day.",
  },
];

export type Celebration = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
};

const g = (i: string) => `https://metroclubresort.in/wp-content/uploads/2025/05/${i}`;

const CELEBRATION_GALLERY = [g("3.jpg"), g("10.jpg"), g("2.jpg"), g("29.jpg"), g("23.jpg")];

function createCelebration(
  slug: string,
  name: string,
  tagline: string,
  description: string,
  highlights: string[],
  image: string
): Celebration {
  return { slug, name, tagline, description, highlights, image, gallery: CELEBRATION_GALLERY };
}

export const CELEBRATIONS: Celebration[] = [
  createCelebration(
    "birthday",
    "Birthday Celebration",
    "Candles under open sky",
    "From first birthdays on the lawn to milestone nights in the banquet hall, we build the whole day around the person being celebrated - decor, cake table, games, pool time and a buffet everyone remembers.",
    ["Themed decor & cake table", "Pool & rain dance access", "Kids play area", "Custom buffet menus", "Photography support"],
    IMAGES.lawn
  ),
  createCelebration(
    "anniversary",
    "Anniversary Celebration",
    "A quieter kind of luxury",
    "Mark the years with a candlelit dinner in the garden, a private cabana by the pool, or a full family gathering in the hall. Intimate or grand - both feel effortless here.",
    ["Candlelit garden dinner", "Floral & fairy-light decor", "Private dining setups", "Couple stay add-on", "Cake & toast service"],
    IMAGES.restaurant
  ),
  createCelebration(
    "engagement",
    "Engagement Ceremony",
    "Where two families meet",
    "An elegant stage, warm lighting and space for both families to move, mingle and eat well. Our team manages the run of show so the families can simply be present.",
    ["Stage & backdrop decor", "Seating for 100-500", "Traditional & modern menus", "Music and sound", "Guest accommodation"],
    IMAGES.banquet
  ),
  createCelebration(
    "reception",
    "Wedding Reception",
    "The night everyone remembers",
    "A grand banquet hall and a lantern-lit lawn, either of which can hold the reception of your life. Full decor, catering, lighting and hospitality handled end to end.",
    ["Banquet hall or open lawn", "Grand stage & lighting", "Multi-cuisine live counters", "Valet & bus parking", "Bridal suite & guest rooms"],
    IMAGES.banquet
  ),
  createCelebration(
    "haldi",
    "Haldi Ceremony",
    "Marigold, laughter, morning sun",
    "Our open lawn is made for haldi - daylight, greenery, water access and easy clean-up, so nobody has to hold back.",
    ["Open-air lawn setup", "Marigold & floral decor", "Traditional breakfast spread", "Rain dance & pool nearby", "Change rooms on site"],
    IMAGES.lawn
  ),
  createCelebration(
    "mehendi",
    "Mehendi Function",
    "Slow afternoons, henna and song",
    "Shaded garden seating, low lounges and a relaxed buffet - a mehendi that feels like a long, beautiful afternoon with the people you love.",
    ["Garden lounge seating", "Colourful canopy decor", "Live music setup", "Snack & chaat counters", "Mehendi artist coordination"],
    IMAGES.lawn
  ),
  createCelebration(
    "sangeet",
    "Sangeet Night",
    "Dance floor under the stars",
    "Full sound, stage lighting and an open floor - indoors in the banquet hall or outdoors on the lawn, with dinner served the moment the last performance ends.",
    ["Stage, sound & lighting", "Open dance floor", "Late-night dinner service", "Rehearsal space", "On-site guest rooms"],
    IMAGES.banquet
  ),
  createCelebration(
    "baby-shower",
    "Baby Shower",
    "Gentle, green and joyful",
    "Soft pastel decor in the garden or hall, comfortable seating for elders, and a menu built around the mother-to-be.",
    ["Pastel floral decor", "Comfortable elder seating", "Traditional menu options", "Photo corner setup", "Half-day or full-day slots"],
    IMAGES.restaurant
  ),
  createCelebration(
    "puberty-ceremony",
    "Puberty Ceremony",
    "Tradition, held with care",
    "A respectful, well-organised manjal neerattu vizha with traditional decor, priest coordination, family seating and a full South Indian feast.",
    ["Traditional stage decor", "Ritual & priest coordination", "Banana-leaf feast", "Large family seating", "Photography & videography"],
    IMAGES.banquet
  ),
  createCelebration(
    "naming-ceremony",
    "Naming Ceremony",
    "The first celebration",
    "An intimate morning function with cradle decor, a warm traditional menu and space for the whole extended family.",
    ["Cradle & stage decor", "Morning ritual timings", "Traditional breakfast & lunch", "Kids play area", "Ample parking"],
    IMAGES.lawn
  ),
  createCelebration(
    "family-reunion",
    "Family Reunion",
    "Everyone, in one place, finally",
    "Rooms for the outstation cousins, a pool for the children, a turf for the uncles and a campfire to end the night. A full day that keeps every generation busy.",
    ["Group accommodation", "Pool & rain dance", "Turf and outdoor games", "Campfire evening", "All-day buffet dining"],
    IMAGES.campfire
  ),
  createCelebration(
    "private-pool-party",
    "Private Pool Party",
    "Water, music, golden hour",
    "Exclusive pool access with music, rain dance, poolside seating and a grill menu - the easiest way to make a weekend unforgettable.",
    ["Exclusive pool access", "Rain dance with DJ", "Poolside lounge seating", "BBQ & grill counters", "Lifeguard on duty"],
    IMAGES.pool
  ),
  createCelebration(
    "corporate-celebration",
    "Corporate Celebration",
    "Annual days and award nights",
    "Award nights, annual days and product launches with stage, AV, branding space, dinner and after-party - organised with professional event support.",
    ["Stage, AV & branding", "Award night setup", "Team dinner counters", "Photography", "Bus parking"],
    IMAGES.banquet
  ),
  createCelebration(
    "retirement-function",
    "Retirement Function",
    "A career, honoured properly",
    "A dignified felicitation setup with stage, seating, AV for tributes and a warm sit-down meal for colleagues and family.",
    ["Felicitation stage", "AV for tribute videos", "Comfortable seating", "Sit-down or buffet dining", "Memento & photo corner"],
    IMAGES.restaurant
  ),
  createCelebration(
    "school-reunion",
    "School Reunion",
    "Back to being fifteen",
    "Turf matches, pool time, indoor games and a long lunch - a full day that gives the batch something new to talk about.",
    ["Cricket turf & games", "Pool & rain dance", "Group lunch buffet", "Photo & memory wall", "Evening campfire"],
    IMAGES.turf
  ),
  createCelebration(
    "college-reunion",
    "College Reunion",
    "The batch, back together",
    "A day-out format built for large groups - activities, music, food and space to simply sit and catch up until the sun goes down.",
    ["Large group day-out", "Music & DJ setup", "Turf, pool & rain dance", "Buffet lunch & hi-tea", "Optional overnight stay"],
    IMAGES.campfire
  ),
];
