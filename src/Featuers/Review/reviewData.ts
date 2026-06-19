export interface Product {
  id: string;
  name: string;
  thumbnail: string;
  oldPrice?: number;
  price: number;
  quantity: number;
}

export interface ProductSection {
  label: string;
  products: Product[];
}

export const productSections: ProductSection[] = [
  {
    label: "Cameras",
    products: [
      {
        id: "cam-1",
        name: "Indoor Camera Pro",
        thumbnail: "/thumbnails/indoor-camera.png",
        oldPrice: 199.99,
        price: 149.99,
        quantity: 2,
      },
      {
        id: "cam-2",
        name: "Outdoor Camera 4K",
        thumbnail: "/thumbnails/outdoor-camera.png",
        price: 249.99,
        quantity: 1,
      },
    ],
  },
  {
    label: "Sensors",
    products: [
      {
        id: "sen-1",
        name: "Motion Sensor",
        thumbnail: "/thumbnails/motion-sensor.png",
        price: 49.99,
        quantity: 3,
      },
      {
        id: "sen-2",
        name: "Door & Window Sensor",
        thumbnail: "/thumbnails/door-sensor.png",
        price: 39.99,
        quantity: 4,
      },
      {
        id: "sen-3",
        name: "Smoke Detector",
        thumbnail: "/thumbnails/smoke-detector.png",
        oldPrice: 79.99,
        price: 59.99,
        quantity: 1,
      },
    ],
  },
  {
    label: "Accessories",
    products: [
      {
        id: "acc-1",
        name: "Keypad",
        thumbnail: "/thumbnails/keypad.png",
        price: 89.99,
        quantity: 1,
      },
      {
        id: "acc-2",
        name: "Yard Sign",
        thumbnail: "/thumbnails/yard-sign.png",
        price: 14.99,
        quantity: 2,
      },
    ],
  },
  {
    label: "Plan",
    products: [
      {
        id: "plan-1",
        name: "Premium Monitoring Plan",
        thumbnail: "/thumbnails/plan.png",
        oldPrice: 49.99,
        price: 29.99,
        quantity: 1,
      },
    ],
  },
];

export const checkoutSummary = {
  originalPrice: 1289.91,
  finalPrice: 989.91,
  savings: 299.99,
};
