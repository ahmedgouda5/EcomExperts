export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  category: 'camera' | 'sensor' | 'accessory' | 'plan';
  description?: string;
}

export interface CheckoutSummary {
  originalTotal: number;
  finalTotal: number;
  savings: number;
}

export interface SecuritySystemData {
  cameras: Product[];
  sensors: Product[];
  accessories: Product[];
  plans: Product[];
  summary: CheckoutSummary;
}