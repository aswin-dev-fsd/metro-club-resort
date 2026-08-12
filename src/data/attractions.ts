export type Attraction = {
  name: string;
  distance: string;
  time: string;
  type: "Temple" | "Lake" | "Dam" | "Wildlife";
};

export const attractionsData: Attraction[] = [
  { name: "Senjerimalai Temple", distance: "14 km", time: "~25 min", type: "Temple" },
  { name: "Sulur Lake", distance: "15 km", time: "~25 min", type: "Lake" },
  { name: "Sithambalam Sivan Temple", distance: "20 km", time: "~35 min", type: "Temple" },
  { name: "Eachanari Vinayagar Temple", distance: "30 km", time: "~50 min", type: "Temple" },
  { name: "Amaravathi Dam", distance: "60 km", time: "~1 hr 30 min", type: "Dam" },
  { name: "Thirumoorthy Dam", distance: "60 km", time: "~1 hr 30 min", type: "Dam" },
  { name: "Aaliyar Dam", distance: "60 km", time: "~1 hr 30 min", type: "Dam" },
  { name: "Top Slip", distance: "65 km", time: "~1 hr 45 min", type: "Wildlife" },
];
