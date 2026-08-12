export type Testimonial = {
  name: string;
  source: "Google" | "TripAdvisor" | "Booking.com";
  text: string;
};

export const testimonialsData: Testimonial[] = [
  { name: "Dhiwakar Kumar", source: "Google", text: "Excellent service and it made our day memorable." },
  {
    name: "Antony",
    source: "TripAdvisor",
    text: "I had a very good time and experience at Metro Club Resort. Everything was really good, and the service was awesome. Especially Suresh who guided us gave a very good behaved and service well. Best place for Happy Weekend.",
  },
  {
    name: "Ninika",
    source: "TripAdvisor",
    text: "Great ambience and friendly staffs who treated us with great hospitality. I would highly recommend this hotel if you're looking for a place to stay in Coimbatore.",
  },
  {
    name: "Tamialagan",
    source: "TripAdvisor",
    text: "The rooms are very clean and the service was good. Definitely a nice place to stay. The ambience and the amenities given sure beats the other hotel/resorts in the surrounding.",
  },
  {
    name: "Mohammad Bright",
    source: "TripAdvisor",
    text: "Nice accommodation for photoshoot and good food and more spacious rooms, the best resort in Coimbatore, am really enjoying in this Metro Club Resort.",
  },
  {
    name: "Sakthi Muruganantham",
    source: "Google",
    text: "We visited with our team, we enjoyed lot with their well prepared games. The lunch was really good. Thank you.",
  },
  {
    name: "Aravindhan P",
    source: "Google",
    text: "Good ambience, good hospitality. Very clean and neat. Food was very good in taste. Swimming pool was well maintained and neat. Had a very nice day out.",
  },
];
