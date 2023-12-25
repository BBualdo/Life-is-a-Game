"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import Mission from "./Mission";
import CreateMissionButton from "./CreateMissionButton";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import MissionDetails from "./MissionDetails";

const MissionsContainer = () => {
  const [missionsCategory, setMissionsCategory] = useState<
    "active" | "completed"
  >("active");
  const [displayedMission, setDisplayedMission] =
    useState<MissionSchema | null>(null);

  const missions = useAppSelector((state) => state.missionsReducer.missions);

  const displayMission = (mission: MissionSchema) => {
    setDisplayedMission(mission);
  };

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
          onClick={() => setMissionsCategory("active")}
          className={clsx("text-2xl uppercase", {
            "scale-105 text-cp-red": missionsCategory === "active",
            "text-cp-red/50 transition-all duration-300 hover:text-cp-red":
              missionsCategory !== "active",
          })}
        >
          Active
        </button>
        <button
          onClick={() => setMissionsCategory("completed")}
          className={clsx("text-2xl uppercase", {
            "scale-105 text-cp-red": missionsCategory === "completed",
            "text-cp-red/50 transition-all duration-300 hover:text-cp-red":
              missionsCategory !== "completed",
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
        className="gradient-cp-red-3 mt-6 flex h-[800px] w-full border-2 border-cp-red p-10"
      >
        <div className="flex max-h-full w-[500px] flex-col gap-1 overflow-y-auto pr-4">
          {missionsCategory === "active" &&
            missions.active.map((mission) => (
              <Mission
                onClick={setDisplayedMission}
                mission={mission}
                key={uuidv4()}
              />
            ))}
          {missionsCategory === "completed" &&
            missions.completed.map((mission) => (
              <Mission
                onClick={setDisplayedMission}
                mission={mission}
                key={uuidv4()}
              />
            ))}
        </div>
        <div className="flex-1">
          {displayedMission && (
            <MissionDetails displayedMission={displayedMission} />
          )}
        </div>
      </motion.section>
    </>
  );
};

export default MissionsContainer;
