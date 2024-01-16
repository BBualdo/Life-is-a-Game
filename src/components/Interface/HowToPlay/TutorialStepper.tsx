"use client";

import { IoClose } from "react-icons/io5";
import Modal from "../shared/Modal";
import { useState } from "react";
import tutorialSteps from "@/src/data/tutorialSteps";
import Step from "./Step";
import { v4 as uuidv4 } from "uuid";

const TutorialStepper = ({
  isOpen,
  closeStepper,
}: {
  isOpen: boolean;
  closeStepper: () => void;
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepperDone = () => {
    closeStepper();
    setCurrentStep(1);
  };

  return (
    isOpen && (
      <Modal isOpen={isOpen} className={["modal-cyan"]}>
        <div className="flex w-full items-center justify-between border-b border-cp-cyan">
          <h2 className="text-xl text-cp-cyan">How to Play</h2>
          <IoClose
            onClick={closeStepper}
            className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
          />
        </div>
        <div className="mt-6 w-full">
          <div
            className="flex"
            style={{ width: 100 * tutorialSteps.length + "%" }}
          >
            {tutorialSteps.map((step) => (
              <Step key={uuidv4()} step={step} currentStep={currentStep} />
            ))}
          </div>
        </div>
        <div className="mt-6 flex w-full items-center justify-between">
          <button
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className={`${
              currentStep === 1 ? "opacity-0" : ""
            } btn btn-cyan transition-all duration-200 enabled:hover:bg-cp-red/50`}
          >
            Previous
          </button>

          {currentStep < 3 && (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="btn btn-yellow justify-end transition-all duration-200 hover:bg-black"
            >
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button
              onClick={handleStepperDone}
              className="btn btn-green transition-all duration-200 hover:bg-cp-green/50"
            >
              Done
            </button>
          )}
        </div>
      </Modal>
    )
  );
};

export default TutorialStepper;
