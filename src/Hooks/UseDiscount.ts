import { useMemo } from "react";

export function UseDiscount(
  discountPercentage?: number,
  compareAtPrice?: number,
  price?: number,
) {
  const discount = useMemo(() => {
    if (discountPercentage) {
      return discountPercentage;
    } else if (compareAtPrice && price) {
      return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
    } else {
      return 0;
    }
  }, [discountPercentage, compareAtPrice, price]);

  return discount;
}
