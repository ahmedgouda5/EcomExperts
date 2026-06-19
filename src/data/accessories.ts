import type { Product } from "../Types/products";

export const accessories: Product[] = [
  {
    id: "7",
    title: "Keypad",
    description: "Control and arm your security system with ease.",
    image: "/Accessories/Wyze_MicroSD.png",
    price: 29.99,
    compareAtPrice: 39.99,
    discountPercentage: 25,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 2 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 3 },
    ],
  },
];
