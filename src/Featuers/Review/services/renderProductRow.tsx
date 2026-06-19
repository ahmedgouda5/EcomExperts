import { Minus, Plus } from "lucide-react";
import type { SelectedProduct } from "../../../Store";

interface StoreActions {
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

export const renderProductRow = (
  product: SelectedProduct,
  store: StoreActions,
) => (
  <div
    key={product.id}
    className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center sm:justify-between"
  >
    <div className="flex items-center gap-4 min-w-0">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-12 w-12 object-contain"
          />
        ) : (
          <div className="h-8 w-8 rounded-lg bg-gray-200" />
        )}
      </div>
      <span className="truncate text-sm font-medium text-gray-900">
        {product.title}
      </span>
    </div>

    <div className="flex items-center justify-between gap-6 sm:justify-end">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => store.decrementQuantity(product.id)}
          disabled={product.quantity <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Decrease quantity"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>

        <span className="flex h-8 w-10 items-center justify-center text-sm font-medium text-gray-900">
          {product.quantity}
        </span>

        <button
          type="button"
          onClick={() => store.incrementQuantity(product.id)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50 hover:text-gray-700"
          aria-label="Increase quantity"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-right">
        {product.compareAtPrice !== undefined &&
          product.compareAtPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              ${(product.compareAtPrice * product.quantity).toFixed(2)}
            </span>
          )}
        <span className="text-base font-semibold text-[#4E2FD2]">
          ${(product.price * product.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);
