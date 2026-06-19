import type { Product } from "../Types/products";

export const sensors: Product[] = [
  {
    id: "6",
    title: "Motion Sensor",
    description: "Detects motion and sends alerts to your phone.",
    image: "/Sensors/SenseOne.png",
    price: 29.99,
    compareAtPrice: 39.99,
    discountPercentage: 25,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 2 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 1 },
    ],
  },
];
