"use client";

import { active, completed } from "@/src/data/missions";
import { fadeIn } from "@/src/utils/fadeIn";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import Mission from "./Mission";

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
            "scale-105 text-cp-yellow": missions === "active",
            "text-cp-yellow/50 transition-all duration-300 hover:text-cp-yellow":
              missions !== "active",
          })}
        >
          Active
        </button>
        <button
          onClick={() => setMissions("completed")}
          className={clsx("text-2xl uppercase", {
            "scale-105 text-cp-yellow": missions === "completed",
            "text-cp-yellow/50 transition-all duration-300 hover:text-cp-yellow":
              missions !== "completed",
          })}
        >
          Completed
        </button>
      </motion.nav>
      <motion.section
        variants={fadeIn("", 0.5, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gradient-cp-red-2 mt-6 flex h-[800px] w-full border-2 border-cp-cyan p-20"
      >
        <div className="flex w-1/3 flex-col gap-1">
          {missions === "active" &&
            active.map((mission) => <Mission name={mission} />)}
          {missions === "completed" &&
            completed.map((mission) => <Mission name={mission} />)}
        </div>
        <div className="flex-1"></div>
      </motion.section>
    </>
  );
};

export default MissionsContainer;
