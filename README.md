# Security System — E-Commerce Configurator

A React + TypeScript application for configuring and reviewing a home security system bundle. Users select cameras, sensors, and accessories through an accordion stepper, then review their selections in a checkout-ready summary.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling
- **Zustand** — state management (per-category stores)
- **Tailwind CSS** — responsive utility-first styling
- **Lucide React** — icons
- **Radix UI** — accessible accordion primitives

## Architecture

```
src/
├── App.tsx                          # Root layout
├── data/                            # Product data (separated by category)
│   ├── cameras.ts
│   ├── sensors.ts
│   ├── accessories.ts
│   └── index.ts                     # Barrel exports + step config
├── Types/
│   └── products.ts                  # Product, Variant, Bundle types
├── Store/                           # Zustand stores (per-category)
│   ├── index.ts                     # Barrel re-exports
│   ├── service/                     # Shared pure functions
│   │   ├── types.ts                 # SelectedProduct interface
│   │   ├── productService.ts        # toggle, increment, decrement, price utils
│   │   └── index.ts
│   ├── useCameraStore.ts
│   ├── useSensorStore.ts
│   └── useAccessoryStore.ts
├── Featuers/                        # Feature modules
│   ├── According.tsx                # Accordion stepper (step 1-4)
│   ├── Product/                     # Product selection UI
│   │   ├── CameraSection.tsx
│   │   ├── SensorSection.tsx
│   │   ├── AccessorySection.tsx
│   │   ├── PlanSection.tsx
│   │   └── productCardUi.tsx        # Shared product card (receives store as prop)
│   ├── Review/                      # Checkout summary
│   │   ├── Review.tsx               # Pure layout component
│   │   └── services/
│   │       ├── useReviewData.ts     # Hook: combines all stores, computes totals
│   │       ├── renderProductRow.tsx  # Pure render function for product rows
│   │       └── index.ts
│   └── Shared/                      # Navbar, etc.
├── Hooks/                           # Custom hooks (UseDiscount)
├── components/                      # UI primitives (accordion, etc.)
└── style/                           # Theme constants
```

## Design Principles

### Logic and UI are separated

Every feature follows the same pattern:

- **`services/`** — contains hooks (`useReviewData`) and pure functions (`renderProductRow`). All data fetching, computation, and store access lives here.
- **Component file** — contains only JSX layout. Imports from `services/` and delegates all logic.

This keeps components small, testable, and focused on presentation.

### Per-category Zustand stores

Instead of one monolithic store, each product category has its own Zustand store:

```ts
useCameraStore    → { products, toggleProduct, incrementQuantity, decrementQuantity, ... }
useSensorStore    → { products, toggleProduct, incrementQuantity, decrementQuantity, ... }
useAccessoryStore → { products, toggleProduct, incrementQuantity, decrementQuantity, ... }
```

All three stores share the same pure functions from `Store/service/productService.ts`:

```ts
toggleProduct(products, product)     → add or remove
incrementQuantity(products, id)      → quantity + 1
decrementQuantity(products, id)      → quantity - 1 (min 1)
getTotalPrice(products)              → sum of price × quantity
getOriginalPrice(products)           → sum of compareAtPrice × quantity
```

### Data separated by category

Product data lives in individual files (`data/cameras.ts`, `data/sensors.ts`, `data/accessories.ts`) rather than a single JSON blob. Each file exports a typed `Product[]` array. The barrel `data/index.ts` re-exports everything plus the step configuration.

### Store injection via props

`ProductCardUi` does not import any store directly. Instead, each section component (`CameraSection`, `SensorSection`, `AccessorySection`) passes its own store as a prop:

```tsx
// CameraSection.tsx
<ProductCardUi {...item} store={useCameraStore} />

// SensorSection.tsx
<ProductCardUi {...item} store={useSensorStore} />
```

This makes the card fully decoupled — it works with any category store.

### Responsive layout

- **Desktop (lg+):** Two-column layout — product list on the left, checkout summary sticky on the right (~380px).
- **Tablet & Mobile:** Single column — checkout summary moves below the product list.
- All spacing, padding, and typography scale with Tailwind breakpoints (`sm:`, `md:`, `lg:`).

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
