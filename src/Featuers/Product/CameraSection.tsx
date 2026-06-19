import { cameras } from "../../data";
import ProductCardUi from "./productCardUi";
import useCameraStore from "../../Store/useCameraStore";

const CameraSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cameras.map((item) => (
        <ProductCardUi key={item.id} {...item} store={useCameraStore} />
      ))}
    </div>
  );
};

export default CameraSection;
