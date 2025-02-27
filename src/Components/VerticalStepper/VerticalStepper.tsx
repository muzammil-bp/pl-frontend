import { useState } from "react";
import "./VerticalStepper.css";

const steps = [
  "Order Form",
  "Materials & Parts",
  "Manager Approval",
  "Production Planning",
  "Production Process",
  "Quality Control",
  "Manager Final Approval",
  "Packaging & Delivery",
  "Delivery Form",
  "Post Delivery",
];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <div className="stepper-container">
      <ul className="stepper">
        {steps.map((step, index) => (
          <li key={index} className="stepper-step">
            <div
              className={`stepper-circle ${index < activeStep ? "active" : ""}`}
            ></div>
            <div
              className={`stepper-label ${
                index < activeStep ? "active text-md font-normal" : ""
              }`}
            >
              {step}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalStepper;
