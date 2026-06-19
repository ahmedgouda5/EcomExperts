import { sensors } from "../../data";
import ProductCardUi from "./productCardUi";
import useSensorStore from "../../Store/useSensorStore";

const SensorSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {sensors.map((item) => (
      <ProductCardUi
        key={item.id}
        {...item}
        store={useSensorStore}
      />
    ))}
  </div>
);

export default SensorSection;
