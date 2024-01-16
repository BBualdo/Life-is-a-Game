import React from "react";

const Step1 = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        translate: -100 * (currentStep - 1) + "%",
      }}
      className="transition-translate flex h-full w-full items-center justify-center bg-cp-red/20 text-5xl uppercase text-white duration-500"
    >
      Step 1
    </div>
  );
};

export default Step1;
