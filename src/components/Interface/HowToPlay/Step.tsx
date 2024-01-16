const Step = ({ step, currentStep }: { step: number; currentStep: number }) => {
  return (
    <div
      style={{
        translate: -100 * (currentStep - 1) + "%",
      }}
      className="flex h-full w-full items-center justify-center bg-cp-red/20 text-5xl uppercase text-white"
    >
      Step {step}
    </div>
  );
};

export default Step;
