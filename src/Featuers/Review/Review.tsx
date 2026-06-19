import { CircleDollarSign } from "lucide-react";
import { useReviewData, renderProductRow } from "./services";
import { Theme } from "../../style/Theme";

const Review = () => {
  const { groups, totalPrice, originalPrice, savings, isEmpty } =
    useReviewData();

  return (
    <div className="bg-[#EDF4FF] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your security system
          </h1>
          <p className="mt-2 max-w-2xl text-base text-gray-500">
            Review your selected equipment and plan before checkout. You can
            adjust quantities or remove items below.
          </p>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <main className="flex-1 min-w-0 space-y-4">
            {isEmpty && (
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
                <p className="text-sm text-gray-400">
                  No products selected yet. Choose items from the steps above.
                </p>
              </div>
            )}

            {groups.map((group, sIdx) => (
              <section key={group.label}>
                {sIdx > 0 && <hr className="mb-2 border-gray-200" />}

                <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {group.label}
                </h2>

                <div className="space-y-2">
                  {group.products.map((p) => renderProductRow(p, group.store))}
                </div>
              </section>
            ))}
            <div className="flex items-center justify-between gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-2">
                <img src="/carbon_delivery.png" alt="Fast Shipping" />
                <span className="text-base font-semibold text-gray-900">
                  Fast Shipping
                </span>
              </div>
              <span className="flex items-center gap-2">
                <h1 className="line-through text-gray-400">$5.99</h1>
                <p style={{ color: Theme.purple }}>Free</p>
              </span>
            </div>
          </main>

          <aside className="w-full shrink-0 lg:w-[380px]">
            <div className="sticky top-8 rounded-2xl bg-[#EDF4FF] p-6 shadow-xl ring-1 ring-gray-100">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center">
                  <img src="/Satisfaction_Badge.png" alt="" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    30-day hassle-free returns
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    Not satisfied? Return your equipment within 30 days for a
                    full refund. No questions asked.
                  </p>
                </div>
              </div>

              <hr className="mb-6 border-gray-100" />

              <div className="mb-6 flex items-start justify-between">
                <span className="rounded-full bg-[#592DF2] px-3 py-2 text-xs font-semibold text-white">
                  as low as ${(totalPrice / 12).toFixed(2)}/mo
                </span>
                <div className="flex items-center gap-3">
                  {originalPrice > totalPrice && (
                    <span className="text-gray-400 line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-lg font-bold text-[#4E2FD2]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {savings > 0 && (
                <div className="mb-4 rounded-xl bg-green-50 p-3 text-center">
                  <span className="flex items-center justify-center gap-1.5 text-sm font-medium text-green-700">
                    <CircleDollarSign className="h-4 w-4" />
                    Congrats! You&apos;re saving ${savings.toFixed(2)} on your
                    security bundle!
                  </span>
                </div>
              )}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#592DF2] px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Checkout
              </button>

              <button
                type="button"
                className="mt-4 block w-full text-center text-sm font-medium text-gray-500 underline underline-offset-2 transition hover:text-gray-700"
              >
                Save my system for later
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Review;
