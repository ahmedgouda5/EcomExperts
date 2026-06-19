import { accessories } from "../../data";
import ProductCardUi from "./productCardUi";
import useAccessoryStore from "../../Store/useAccessoryStore";

const AccessorySection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {accessories.map((item) => (
      <ProductCardUi
        key={item.id}
        {...item}
        store={useAccessoryStore}
      />
    ))}
  </div>
);

export default AccessorySection;
