"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Mission from "./Mission";
import CreateMissionButton from "./CreateMissionButton";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import MissionDetails from "./DetailsComponents/MissionDetails";
import MissionButtons from "./DetailsComponents/MissionButtons";
import { useDispatch } from "react-redux";
import { setselectedMission } from "@/src/redux/slices/selectedMissionSlice";

const MissionsContainer = () => {
  const [missionsCategory, setMissionsCategory] = useState<
    "active" | "completed"
  >("active");

  const missions = useAppSelector((state) => state.missionsReducer.missions);
  const selectedMission = useAppSelector(
    (state) => state.selectedMissionReducer.selectedMission,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (selectedMission) {
      const updatedMission = missions.find(
        (mission) => mission.id === selectedMission.id,
      );

      if (updatedMission) {
        dispatch(setselectedMission(updatedMission));
      }
    }
  }, [missions, selectedMission]);

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
          onClick={() => {
            setMissionsCategory("active");
            dispatch(setselectedMission(null));
          }}
          className={clsx("text-2xl uppercase", {
            "scale-105 text-cp-red": missionsCategory === "active",
            "text-cp-red/50 transition-all duration-300 hover:text-cp-red":
              missionsCategory !== "active",
          })}
        >
          Active
        </button>
        <button
          onClick={() => {
            setMissionsCategory("completed");
            dispatch(setselectedMission(null));
          }}
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
          {missions
            .filter((mission) => mission.status === missionsCategory)
            .map((mission) => (
              <Mission
                mission={mission}
                key={mission.id}
                selectedMission={selectedMission!}
              />
            ))}
        </div>
        <div className="flex-1 pl-20">
          {selectedMission && (
            <div className="flex flex-col items-center gap-10">
              <MissionDetails selectedMission={selectedMission} />
              <MissionButtons selectedMission={selectedMission} />
            </div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default MissionsContainer;
