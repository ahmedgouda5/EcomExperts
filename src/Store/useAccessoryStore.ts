import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { SelectedProduct } from "./service";
import {
  toggleProduct,
  incrementQuantity,
  decrementQuantity,
  getTotalPrice,
  getOriginalPrice,
} from "./service";
import type { Product } from "../Types/products";

interface AccessoryStore {
  products: SelectedProduct[];
  toggleProduct: (product: Product) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  getTotalPrice: () => number;
  getOriginalPrice: () => number;
}

const useAccessoryStore = create<AccessoryStore>()(
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
      name: "accessoryStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAccessoryStore;
