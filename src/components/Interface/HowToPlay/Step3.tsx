"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { GiTrophy } from "react-icons/gi";

const Step3 = ({ currentStep }: { currentStep: number }) => {
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
        className="flex flex-col lg:max-w-[80%]"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-white">
          Achievements <GiTrophy />
        </h2>
        <div className="flex flex-col"></div>
      </motion.div>
    </div>
  );
};

export default Step3;
