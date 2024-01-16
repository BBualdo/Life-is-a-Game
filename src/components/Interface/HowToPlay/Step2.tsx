import React from "react";

const Step2 = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        translate: -100 * (currentStep - 1) + "%",
      }}
      className="transition-translate flex h-full w-full items-center justify-center bg-cp-red/20 text-5xl uppercase text-white duration-500"
    >
      Step 2
    </div>
  );
};

export default Step2;
