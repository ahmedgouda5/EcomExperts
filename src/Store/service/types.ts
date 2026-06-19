import type { Product } from "../../Types/products";

export interface SelectedProduct extends Product {
  quantity: number;
}
