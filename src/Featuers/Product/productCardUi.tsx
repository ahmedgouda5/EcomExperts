import { useState } from "react";
import type { Product } from "../../Types/products";
import type { SelectedProduct } from "../../Store/service";
import { Theme } from "../../style/Theme";
import { UseDiscount } from "../../Hooks/UseDiscount";

interface Store {
  toggleProduct: (product: Product) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
}

interface ProductCardUiProps extends Product {
  store: () => { products: SelectedProduct[] } & Store;
}

const ProductCardUi = ({
  id,
  title,
  description,
  image,
  price,
  compareAtPrice,
  discountPercentage,
  variants,

  store,
}: ProductCardUiProps) => {
  const { toggleProduct, products } = store();
  const [selectedVariant, setSelectedVariant] = useState(variants[0]?.id ?? "");

  const discount = UseDiscount(discountPercentage, compareAtPrice, price);

  const CheckSelected = products.find((item) => item.id === id);

  return (
    <div
      onClick={() => {
        toggleProduct({
          id,
          title,
          description,
          image,
          price,
          compareAtPrice,
          discountPercentage,
          variants,
        });
      }}
      className="group relative flex w-full flex-col rounded-2xl p-4 transition-all duration-300"
      style={{
        backgroundColor: Theme.colors.surface,
        boxShadow: Theme.shadows.sm,
        border: CheckSelected ? "1px solid #4E2FD2" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = Theme.shadows.md;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = Theme.shadows.sm;
      }}
    >
      {discount > 0 && (
        <span
          className="absolute top-3 left-3 z-10 rounded-full px-2 py-0.5 text-[11px] font-semibold"
          style={{
            backgroundColor: Theme.colors.primary,
            color: Theme.colors.white,
          }}
        >
          Save {discount}%
        </span>
      )}

      <div className="flex h-32 items-center justify-center mb-3 sm:h-36">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-1 mb-3">
        <h3
          className="text-sm font-bold leading-snug line-clamp-1"
          style={{ color: Theme.colors.text }}
        >
          {title}
        </h3>
        <p
          className="text-xs leading-normal line-clamp-2"
          style={{ color: Theme.colors.textSecondary }}
        >
          {description}
        </p>
        <button
          className="mt-0.5 self-start text-xs font-semibold underline underline-offset-2 transition-colors duration-150"
          style={{ color: Theme.colors.primary }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = Theme.colors.primaryLight;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = Theme.colors.primary;
          }}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </button>
      </div>

      {variants.length > 0 && (
        <div className="flex items-center gap-1.5 mb-3">
          {variants.map((variant) => {
            const isActive = selectedVariant === variant.id;
            return (
              <button
                key={variant.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariant(variant.id);
                }}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-all duration-150"
                style={{
                  backgroundColor: isActive
                    ? Theme.colors.primaryTint
                    : Theme.colors.surface,
                  border: `1px solid ${isActive ? Theme.colors.primary : Theme.colors.border}`,
                  color: isActive
                    ? Theme.colors.primary
                    : Theme.colors.textSecondary,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = Theme.colors.textMuted;
                    e.currentTarget.style.backgroundColor =
                      Theme.colors.borderLight;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = Theme.colors.border;
                    e.currentTarget.style.backgroundColor =
                      Theme.colors.surface;
                  }
                }}
                aria-label={`Select ${variant.name} color`}
                aria-pressed={isActive}
              >
                <span
                  className="inline-block h-3 w-3 rounded-sm border"
                  style={{
                    backgroundColor: variant.color,
                    borderColor: Theme.colors.border,
                  }}
                />
                {variant.name} ({variant.quantity})
              </button>
            );
          })}
        </div>
      )}

      <div
        className="flex items-center justify-between mt-auto pt-3 border-t"
        style={{ borderColor: Theme.colors.borderLight }}
      >
        <div className="inline-flex items-center gap-0" />

        <div className="flex flex-col items-end gap-0">
          {compareAtPrice && compareAtPrice > price && (
            <span
              className="text-[11px] font-normal leading-none line-through"
              style={{ color: Theme.colors.danger }}
            >
              ${compareAtPrice.toFixed(2)}
            </span>
          )}
          <span
            className="text-lg font-bold leading-none"
            style={{ color: Theme.colors.text }}
          >
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardUi;
