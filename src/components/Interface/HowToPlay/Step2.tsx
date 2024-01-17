"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const Step2 = ({ currentStep }: { currentStep: number }) => {
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
        className="flex flex-col"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-white">
          Missions <GiOpenBook />
        </h2>
        <div className="flex flex-col">
          <p className="text-lg text-white">
            Here you can create missions to complete. Click the{" "}
            <span className="text-cp-yellow">Create Mission (+)</span> button to
            open the form.
          </p>
          <p className="text-md text-white">
            In the form you can define mission's{" "}
            <span className="font-bold uppercase text-cp-cyan">Title</span>,
            write your plan or ideas in{" "}
            <span className="font-bold uppercase text-cp-cyan">
              Description
            </span>
            , set it's{" "}
            <span className="font-bold uppercase text-cp-cyan">Difficulty</span>{" "}
            and split it into various{" "}
            <span className="font-bold uppercase text-cp-cyan">Subtasks</span>.
          </p>
          <p className="text-md mt-2 text-white">
            <span className="font-bold uppercase text-cp-red">DIFFICULTY:</span>{" "}
            Be fair with yourself when you set up mission's difficulty level.
            Harder missions will give you more XP, but there is no fun in
            getting max XP for easy missions. Tweak the slider to your personal
            feelings about the challenge the mission give you.
          </p>
          <p className="text-md mt-2 text-white">
            <span className="font-bold uppercase text-cp-red">SUBTASKS:</span>{" "}
            You don't have to split mission into smaller parts. If mission is
            simple you can leave it empty. App will create one subtask based on
            your mission's title.
          </p>
          <p className="text-md mt-2 text-white">
            If you check all your subtasks as completed,{" "}
            <span className="font-bold uppercase text-cp-green">
              Complete Mission
            </span>{" "}
            button will become active. When you click it you will gain XP and
            mission will be moved into{" "}
            <span className="inline-block font-bold uppercase text-cp-red">
              <span className="flex items-center gap-1">
                Completed <FaRegCheckCircle />
              </span>
            </span>{" "}
            section.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step2;
