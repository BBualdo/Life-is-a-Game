"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Step4 = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        transform: `translateX(-${100 * (currentStep - 1)}%)`,
      }}
      className="flex h-full w-full flex-col transition-transform duration-500"
    >
      <motion.div
        variants={fadeIn("", 0.2, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col lg:max-w-[80%]"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-white">
          Profile <FaUser />
        </h2>
        <div className="flex flex-col">
          <p className="text-md text-white">
            Here you can see your level and how much XP you have to get to reach
            another one or customize your Profile by:
          </p>
          <ul className="text-md mt-2 text-white">
            <li className="flex items-center gap-1">
              <RiArrowRightDoubleFill className="text-2xl text-cp-red" />
              Changing your{" "}
              <span className="font-bold uppercase text-cp-cyan">Avatar</span>
            </li>
            <li className="flex items-center gap-1">
              <RiArrowRightDoubleFill className="text-2xl text-cp-red" />
              Setting up your{" "}
              <span className="font-bold uppercase text-cp-cyan">Username</span>
              ,{" "}
              <span className="font-bold uppercase text-cp-cyan">
                First Name
              </span>{" "}
              and{" "}
              <span className="font-bold uppercase text-cp-cyan">
                Last Name
              </span>
            </li>
            <li className="flex items-center gap-1">
              <RiArrowRightDoubleFill className="text-2xl text-cp-red" />
              Defining your{" "}
              <span className="font-bold uppercase text-cp-cyan">
                current Goal
              </span>
              . If you have any long term dream, you can share it here!
            </li>
            <li className="flex items-center gap-1">
              <RiArrowRightDoubleFill className="text-2xl text-cp-red" />
              Writing something about you in{" "}
              <span className="font-bold uppercase text-cp-cyan">Bio</span>
            </li>
          </ul>
          <p className="text-md mt-2 text-white">
            All of these are classified, so no worries, you won't be{" "}
            <span className="font-bold uppercase text-cp-red">Hacked</span>!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step4;
