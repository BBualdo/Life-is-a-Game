"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";
import Logo from "../../Auth/Logo";
import { arcade } from "@/src/fonts";

const FinalStep = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        translate: -100 * (currentStep - 1) + "%",
      }}
      className="transition-translate flex h-full w-full flex-col duration-500"
    >
      <motion.div
        variants={fadeIn("", 0.2, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
        <h2 className="text-3xl uppercase text-white">That's it!</h2>
        <p className="text-3xl text-white">
          Now you are ready to{" "}
          <span className="font-bold uppercase text-cp-cyan">
            explore and lower your limitations
          </span>
          !
        </p>
        <p className="text-xl text-white">And remember...</p>
        <div className={arcade.className}>
          <Logo arbitaryClasses="flex-row gap-2" />
        </div>
        <p className="mt-6 text-xl text-white">
          Click <span className="font-bold uppercase text-cp-green">Done</span>{" "}
          to complete Tutorial!
        </p>
      </motion.div>
    </div>
  );
};

export default FinalStep;
