"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { FaTrophy, FaRegCheckCircle } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";

const Step3 = ({ currentStep }: { currentStep: number }) => {
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
          Achievements <FaTrophy />
        </h2>
        <div className="flex flex-col">
          <p className="text-md text-white">
            Welcome to the Achievements section, where your accomplishments are
            celebrated!
          </p>
          <p className="text-md text-white">
            Achievements are{" "}
            <span className="text-cp-cyan">special milestones</span> that you
            can unlock by completing various tasks and challenges within the
            app. Successfully unlocking an achievement not only showcases your
            skills but also{" "}
            <span className="text-cp-cyan">rewards you with XP</span> to help
            you level up.
          </p>
          <p className="text-md mt-2 text-white">
            Each achievement comes with its own set of requirements, and some
            may require strategic planning and dedication to accomplish.{" "}
          </p>
          <p className="text-md mt-2 flex items-center gap-1 text-white">
            <span className="inline-block font-bold uppercase text-cp-green">
              <span className="flex gap-1">
                <GiChampions /> Pro Tip:
              </span>
            </span>
            Keep an eye on your progress and aim for the achievements that align
            with your goals.
          </p>
          <p className="text-md mt-2 text-white">
            Once you meet the criteria for an achievement, it will be
            highlighted as completed showcasing your accomplishment. Don't
            forget to check your progress regularly and strive to unlock them
            all!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step3;
