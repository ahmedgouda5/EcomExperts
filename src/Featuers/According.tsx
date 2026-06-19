import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Theme } from "../style/Theme";
import { ChevronDown } from "lucide-react";
import { steps } from "../data";
import CameraSection from "./Product/CameraSection";
import SensorSection from "./Product/SensorSection";
import AccessorySection from "./Product/AccessorySection";
import PlanSection from "./Product/PlanSection";
import useCameraStore from "../Store/useCameraStore";
import useSensorStore from "../Store/useSensorStore";
import useAccessoryStore from "../Store/useAccessoryStore";

const sectionContent: Record<string, React.ReactNode> = {
  cameras: <CameraSection />,
  sensors: <SensorSection />,
  protection: <AccessorySection />,
  plan: <PlanSection />,
};

export function AccordionDemo() {
  const [open, setOpen] = useState<string>();

  const cameraCount = useCameraStore((s) =>
    s.products.reduce((sum, p) => sum + p.quantity, 0),
  );
  const sensorCount = useSensorStore((s) =>
    s.products.reduce((sum, p) => sum + p.quantity, 0),
  );
  const accessoryCount = useAccessoryStore((s) =>
    s.products.reduce((sum, p) => sum + p.quantity, 0),
  );

  const getSelectedCount = (value: string) => {
    switch (value) {
      case "cameras":
        return cameraCount;
      case "sensors":
        return sensorCount;
      case "protection":
        return accessoryCount;
      default:
        return 0;
    }
  };

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-5">
      <div className="mx-auto max-w-6xl">
        <Accordion
          type="single"
          collapsible
          defaultValue={open}
          onValueChange={setOpen}
          className="w-full"
        >
          {steps.map(({ value, step, title, icon }) => {
            const isActive = open === value;
            const content = sectionContent[value];
            const selectedCount = getSelectedCount(value);

            return (
              <AccordionItem key={value} value={value} className="border-0">
                <div
                  className="transition-all duration-300"
                  style={{
                    backgroundColor: isActive
                      ? Theme.colors.surface
                      : "transparent",
                    boxShadow: isActive ? Theme.shadows.sm : "none",
                    marginBottom: isActive ? "2px" : "0",
                  }}
                >
                  <AccordionTrigger
                    className="group flex w-full flex-col items-start gap-4 py-5 text-left hover:no-underline focus-visible:ring-0 **:[data-slot=accordion-trigger-icon]:hidden"
                    style={{ color: Theme.colors.text }}
                  >
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.15em] border-b py-2 px-2 w-full"
                      style={{ color: Theme.colors.textMuted }}
                    >
                      Step {step} of {steps.length}
                    </span>
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200"
                          style={{
                            backgroundColor: isActive
                              ? Theme.colors.primaryTint
                              : "transparent",
                            color: isActive
                              ? Theme.colors.primary
                              : Theme.colors.textMuted,
                          }}
                        >
                          <img src={icon} alt="icon" width={18} height={18} />
                        </div>
                        <span className="text-base font-bold leading-tight">
                          {title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm font-semibold text-right w-20"
                          style={{ color: Theme.purple }}
                        >
                          {selectedCount} selected
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                          style={{
                            color: isActive
                              ? Theme.colors.primary
                              : Theme.colors.textMuted,
                          }}
                        />
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 sm:px-8">
                    <div
                      className="mb-6 rounded-xl p-5 sm:p-6"
                      style={{
                        backgroundColor: Theme.colors.background,
                        border: `1px solid ${Theme.colors.borderLight}`,
                      }}
                    >
                      {content}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
