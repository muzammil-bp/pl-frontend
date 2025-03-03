import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Circle, TrendingUp } from "lucide-react";
import { useState } from "react";
import "./HorizontalStepper.css";

export default function ProgressTracker() {
  const steps = ["making", "building", "finishing"];
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="relative w-[430px]  p-4.5 !gap-1  shadow-xl rounded-xl bg-white">
        {/* Header Section */}
        <div className="flex  justify-between items-center">
          <div className="flex flex-col items-center space-x-2">
            {/* <TrendingUp className="bg-gray-300 w-12 h-12 p-1 " /> */}
            <img
              src="analytics.png"
              alt=""
              className="bg-[#3e3e3e] rounded-md w-[52px] h-[52px] pl-[1px]"
            />

            <span className="text-base font-light tracking-tighter text-gray-700">
              Progress
            </span>
          </div>
          <div className="absolute mt-4  right-4 w-[118px] h-[95px] flex items-center justify-center rounded-md bg-gray-200">
            <svg
              className="w-[72px] h-[72px] transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <circle
                className="text-[#3e3e3e] stroke-current border-none"
                strokeWidth="1.5"
                fill="transparent"
                r="17"
                cx="18"
                cy="18"
              />
              <circle
                className="text-gray-200 stroke-current border-"
                strokeWidth="3"
                strokeDasharray="100"
                strokeDashoffset="80" // Adjust for anticlockwise progress
                fill="transparent"
                r="17"
                cx="18"
                cy="18"
                strokeLinecap="butt"
              />
            </svg>
            <span className="absolute text-[18px] font-medium">80%</span>
          </div>
        </div>

        {/* Product Info */}
        <h2 className="text-[32px] font-semibold text-[#3e3e3e]">
          Wooden Chair
        </h2>
        <p className="text-[14px] font-light text-[#3e3e3e] mb-2">
          (Description) Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>

        {/* Progress Bar */}
        {/* <div className="relative mb-4">
          <div className="w-full h-1 bg-gray-300 rounded-full relative">
            <div className="absolute top-1/2 left-0 w-3/5 h-1 bg-black rounded-full transform -translate-y-1/2"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className="relative before:absolute before:-top-1 before:left-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full before:-translate-x-1/2">
              Cutting
            </span>
            <span className="relative before:absolute before:-top-1 before:left-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full before:-translate-x-1/2">
              Assembly
            </span>
            <span className="relative before:absolute before:-top-1 before:left-1/2 before:w-2 before:h-2 before:bg-gray-400 before:rounded-full before:-translate-x-1/2">
              Finishing
            </span>
          </div>
        </div> */}

        <div className="stepper-container">
          <ul className="stepper !p-0 !m-0">
            {steps.map((step, index) => (
              <li key={index} className="stepper-step">
                <div
                  className={`stepper-circle ${
                    index < activeStep ? "active" : "!border-gray-400"
                  }`}
                ></div>
                <div
                  className={`stepper-label ${
                    index < activeStep ? "active " : ""
                  }`}
                >
                  {step}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <Button className="w-[394px] bg-[#3e3e3e14] h-[44px] text-black hover:text-white hover:bg-[#3e3e3e] ">
          Continue to the Inventory →
        </Button>
      </Card>
    </div>
  );
}
