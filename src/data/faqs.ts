export type FaqItem = { q: string; a: string };

export type FaqGroup = {
  category: string;
  items: FaqItem[];
};

export const resortFaqs: FaqGroup[] = [
  {
    category: "Stay & Rooms",
    items: [
      {
        q: "What rooms are available at Metro Club Resort?",
        a: "We offer the Standard Room, Deluxe Room, Deluxe Room with Balcony, and the Master Room with Pool View. We also have King Rooms with Pool View, Balcony Rooms with Pool View, and Deluxe Rooms with Farm View — each equipped with air conditioning, a flat-screen TV, a private bathroom, and a dedicated workspace.",
      },
      {
        q: "What are the check-in and check-out times?",
        a: "Check-in begins at 12:00 PM and check-out is at 11:00 AM. Late check-out can be arranged on request, subject to availability.",
      },
      {
        q: "How do we book a room?",
        a: "You can book easily by clicking any 'Book Now' button on our website, which will open a direct WhatsApp chat with our front desk. Alternatively, you can book instantly through our Booking.com and MakeMyTrip listings.",
      },
      {
        q: "How do I pay for my booking?",
        a: "We accept online card payments (Visa, Mastercard, JCB, American Express, and Diners Club), as well as UPI and direct bank transfers. Prepaid bookings are charged in advance at confirmation, while flexible-rate bookings are charged at check-out.",
      },
      {
        q: "Can my children stay in the room for free?",
        a: "Children under 5 years stay free when using existing bedding. Extra beds and mattresses are available for a nominal charge — please specify your group composition when making an enquiry.",
      },
      {
        q: "Are babysitting services available?",
        a: "Babysitting and child-minding can be arranged on prior request. Our kids' play area is also open to all in-house guests.",
      },
    ],
  },
  {
    category: "Resort & Facilities",
    items: [
      {
        q: "What facilities do you offer at the resort?",
        a: "We feature an open-air swimming pool, a rain dance with music, a multi-cuisine restaurant, a professional sports turf, a campfire area, a kids' play area, indoor and outdoor games, horse cart rides, landscaped gardens, and a banquet hall. Complimentary parking and Wi-Fi are available throughout the resort.",
      },
      {
        q: "Is parking available?",
        a: "Yes. The resort offers complimentary private parking for cars and buses on premises.",
      },
      {
        q: "Where is the resort located?",
        a: "We are located at 1/47 Puliyamarathupalayam, Varapatti, Sultanpet, Coimbatore 641658 — a comfortable, scenic drive from Coimbatore city, Codissia Trade Fair Complex, and Tiruppur.",
      },
    ],
  },
  {
    category: "Corporate Events",
    items: [
      {
        q: "Do you host corporate day outs and offsites?",
        a: "Yes! Our Corporate Day Out and Corporate Stay packages include welcome drinks, team-building activities, buffet meals, conference setup with projector and sound, pool and rain dance access, turf usage, games, and professional event support.",
      },
      {
        q: "Do you have a conference hall with AV equipment?",
        a: "Our banquet hall converts into a fully equipped conference space with a projector, screen, sound system, microphones, and flexible seating configurations (boardroom, classroom, or theatre layouts).",
      },
      {
        q: "What group sizes can you accommodate?",
        a: "We regularly host groups from 20 to 500 guests across the banquet hall, outdoor lawn, and open grounds. Let us know your headcount and we will custom-design the layout for your team.",
      },
      {
        q: "Can you handle school and college groups?",
        a: "Yes. We offer dedicated school and college day-out packages that include supervised activities, hygienic buffet meals, pool/rain dance sessions, and ample bus parking.",
      },
    ],
  },
  {
    category: "Celebrations",
    items: [
      {
        q: "What celebrations can be hosted at Metro Club Resort?",
        a: "Weddings, receptions, engagements, haldi, mehendi, sangeet, birthdays, anniversaries, baby showers, puberty and naming ceremonies, family/school reunions, retirement functions, and private pool parties.",
      },
      {
        q: "Can we bring our own decorator or caterer?",
        a: "Our in-house team handles decor and multi-cuisine catering, but we also welcome approved external decorators. Outside catering can be discussed based on the specific type of event.",
      },
      {
        q: "Is the outdoor lawn available for night events?",
        a: "Yes. The lawn is fitted for evening and night functions with ambient lighting, stage setups, and sound systems, making it ideal for receptions, sangeet, and open-air dinners.",
      },
      {
        q: "Do you offer accommodation for event guests?",
        a: "Yes. Outstation guests can stay comfortably across our room categories. We offer special group rates for bookings associated with events at our resort.",
      },
    ],
  },
];

export function faqSchema(categories?: string[]) {
  const groups = categories
    ? resortFaqs.filter((g) => categories.includes(g.category))
    : resortFaqs;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    ),
  };
}
