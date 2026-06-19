import type { Product } from "../Types/products";

export const cameras: Product[] = [
  {
    id: "1",
    title: "Outdoor Camera",
    description:
      "Keep an eye on your property day and night with advanced motion detection.",
    image: "/Cameras/Wyze_Cam.png",
    price: 199.99,
    compareAtPrice: 249.99,
    discountPercentage: 20,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 2 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 0 },
    ],
  },
  {
    id: "2",
    title: "Video Doorbell",
    description:
      "See and speak with visitors from anywhere with crystal clear video.",
    image: "/Cameras/Wyze_CamV2.png",
    price: 149.99,
    compareAtPrice: 179.99,
    discountPercentage: 17,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 0 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 0 },
    ],
  },
  {
    id: "3",
    title: "Indoor Camera",
    description:
      "Monitor the inside of your home in real time with night vision capability.",
    image: "/Cameras/Wyze_CamV3.png",
    price: 129.99,
    compareAtPrice: 159.99,
    discountPercentage: 19,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 2 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 0 },
    ],
  },
  {
    id: "4",
    title: "Floodlight Camera",
    description:
      "Smart lighting and security combined with 2K resolution video.",
    image: "/Cameras/Wyze_CamV4.png",
    price: 249.99,
    compareAtPrice: 299.99,
    discountPercentage: 17,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 1 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 0 },
    ],
  },
  {
    id: "5",
    title: "Wireless Camera",
    description:
      "Easy installation with flexible placement and long battery life.",
    image: "/Cameras/Wyze_CamV5.png",
    price: 179.99,
    compareAtPrice: 219.99,
    discountPercentage: 18,
    variants: [
      { id: "white", name: "White", color: "#FFFFFF", quantity: 3 },
      { id: "black", name: "Black", color: "#1A1A2E", quantity: 2 },
    ],
  },
];
