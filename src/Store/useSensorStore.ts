import { create } from "zustand";
import type { SelectedProduct } from "./service";
import {
  toggleProduct,
  incrementQuantity,
  decrementQuantity,
  getTotalPrice,
  getOriginalPrice,
} from "./service";
import type { Product } from "../Types/products";
import { createJSONStorage, persist } from "zustand/middleware";

interface SensorStore {
  products: SelectedProduct[];
  toggleProduct: (product: Product) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  getTotalPrice: () => number;
  getOriginalPrice: () => number;
}

const useSensorStore = create<SensorStore>()(
  persist(
    (set, get) => ({
      products: [],

      toggleProduct: (product: Product) =>
        set((state) => ({
          products: toggleProduct(state.products, product),
        })),

      incrementQuantity: (productId: string) =>
        set((state) => ({
          products: incrementQuantity(state.products, productId),
        })),

      decrementQuantity: (productId: string) =>
        set((state) => ({
          products: decrementQuantity(state.products, productId),
        })),

      getTotalPrice: () => getTotalPrice(get().products),
      getOriginalPrice: () => getOriginalPrice(get().products),
    }),
    {
      name: "sensorStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSensorStore;
