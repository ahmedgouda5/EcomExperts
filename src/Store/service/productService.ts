import type { Product } from "../../Types/products";
import type { SelectedProduct } from "./types";

export const addProduct = (
  products: SelectedProduct[],
  product: Product,
): SelectedProduct[] => {
  const exists = products.some((p) => p.id === product.id);
  if (exists) return products;
  return [...products, { ...product, quantity: 1 }];
};

export const removeProduct = (
  products: SelectedProduct[],
  productId: string,
): SelectedProduct[] => products.filter((p) => p.id !== productId);

export const toggleProduct = (
  products: SelectedProduct[],
  product: Product,
): SelectedProduct[] => {
  const exists = products.some((p) => p.id === product.id);
  return exists
    ? removeProduct(products, product.id)
    : addProduct(products, product);
};

export const incrementQuantity = (
  products: SelectedProduct[],
  productId: string,
): SelectedProduct[] =>
  products.map((p) =>
    p.id === productId ? { ...p, quantity: p.quantity + 1 } : p,
  );

export const decrementQuantity = (
  products: SelectedProduct[],
  productId: string,
): SelectedProduct[] =>
  products.map((p) =>
    p.id === productId && p.quantity > 1
      ? { ...p, quantity: p.quantity - 1 }
      : p,
  );

export const getTotalPrice = (products: SelectedProduct[]): number =>
  products.reduce((sum, p) => sum + p.price * p.quantity, 0);

export const getOriginalPrice = (products: SelectedProduct[]): number =>
  products.reduce((sum, p) => {
    const original = p.compareAtPrice ?? p.price;
    return sum + original * p.quantity;
  }, 0);
