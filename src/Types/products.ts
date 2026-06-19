export type Variant = {
  id: string;
  name: string;
  color: string;
  quantity: number;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  discountPercentage?: number;
  variants: Variant[];
};

export type Bundle = Product[];
