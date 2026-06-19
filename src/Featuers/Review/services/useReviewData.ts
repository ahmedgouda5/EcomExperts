import useAccessoryStore from "../../../Store/useAccessoryStore";
import useCameraStore from "../../../Store/useCameraStore";
import useSensorStore from "../../../Store/useSensorStore";
import type { SelectedProduct } from "../../../Store";

export interface CategoryGroup {
  label: string;
  products: SelectedProduct[];
  store: {
    incrementQuantity: (id: string) => void;
    decrementQuantity: (id: string) => void;
  };
}

export interface ReviewTotals {
  groups: CategoryGroup[];
  allProducts: SelectedProduct[];
  totalPrice: number;
  originalPrice: number;
  savings: number;
  isEmpty: boolean;
}

export const useReviewData = (): ReviewTotals => {
  const cameraProducts = useCameraStore((s) => s.products);
  const sensorProducts = useSensorStore((s) => s.products);
  const accessoryProducts = useAccessoryStore((s) => s.products);

  const cameraStore = useCameraStore();
  const sensorStore = useSensorStore();
  const accessoryStore = useAccessoryStore();

  const allProducts = [
    ...cameraProducts,
    ...sensorProducts,
    ...accessoryProducts,
  ];

  const groups: CategoryGroup[] = [
    { label: "Cameras", products: cameraProducts, store: cameraStore },
    { label: "Sensors", products: sensorProducts, store: sensorStore },
    {
      label: "Accessories",
      products: accessoryProducts,
      store: accessoryStore,
    },
  ].filter((g) => g.products.length > 0);

  const totalPrice = allProducts.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  );

  const originalPrice = allProducts.reduce((sum, p) => {
    const original = p.compareAtPrice ?? p.price;
    return sum + original * p.quantity;
  }, 0);

  return {
    groups,
    allProducts,
    totalPrice,
    originalPrice,
    savings: originalPrice - totalPrice,
    isEmpty: allProducts.length === 0,
  };
};
