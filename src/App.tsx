import { AccordionDemo } from "./Featuers/According";
import Review from "./Featuers/Review/Review";

const App = () => {
  return (
    <>
      <div className="my-3 space-y-4 px-4 sm:px-6 lg:px-8">
        <section>
          <AccordionDemo />
        </section>
        <section>
          <Review />
        </section>
      </div>
    </>
  );
};

export default App;
