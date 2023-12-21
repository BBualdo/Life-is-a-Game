"use client";

import { active, completed } from "@/src/data/missions";
import { fadeIn } from "@/src/utils/fadeIn";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import Mission from "./Mission";
import CreateMissionButton from "./CreateMissionButton";
import { v4 as uuidv4 } from "uuid";

const MissionsContainer = () => {
  const [missions, setMissions] = useState<"active" | "completed">("active");

  return (
    <>
      <motion.nav
        variants={fadeIn("", 0.5, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 flex w-full items-center gap-10"
      >
        <button
          onClick={() => setMissions("active")}
          className={clsx("text-2xl uppercase", {
            "scale-105 text-cp-red": missions === "active",
            "text-cp-red/50 transition-all duration-300 hover:text-cp-red":
              missions !== "active",
          })}
        >
          Active
        </button>
        <button
          onClick={() => setMissions("completed")}
          className={clsx("text-2xl uppercase", {
            "scale-105 text-cp-red": missions === "completed",
            "text-cp-red/50 transition-all duration-300 hover:text-cp-red":
              missions !== "completed",
          })}
        >
          Completed
        </button>
        <CreateMissionButton />
      </motion.nav>
      <motion.section
        variants={fadeIn("", 0.5, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gradient-cp-red-3 mt-6 flex h-[800px] w-full border-2 border-cp-red p-20"
      >
        <div className="flex w-1/3 flex-col gap-1">
          {missions === "active" &&
            active.map((mission) => <Mission key={uuidv4()} name={mission} />)}
          {missions === "completed" &&
            completed.map((mission) => (
              <Mission key={uuidv4()} name={mission} />
            ))}
        </div>
        <div className="flex-1"></div>
      </motion.section>
    </>
  );
};

export default MissionsContainer;
