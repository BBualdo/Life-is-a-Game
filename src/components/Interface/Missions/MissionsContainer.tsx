"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Mission from "./Mission";
import CreateMissionButton from "./CreateMissionButton";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import MissionDetails from "./DetailsComponents/MissionDetails";
import { useDispatch } from "react-redux";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import MissionsEmpty from "../shared/MissionsEmpty";

const MissionsContainer = () => {
  const [missionsCategory, setMissionsCategory] = useState<
    "active" | "completed"
  >("active");

  const missions = useAppSelector((state) => state.missionsReducer.missions);
  const selectedMission = useAppSelector(
    (state) => state.selectedMissionReducer.selectedMission,
  );

  const dispatch = useDispatch<AppDispatch>();

  const filteredMissions = missions
    .filter((mission) => mission.status === missionsCategory)
    .map((mission) => (
      <Mission
        mission={mission}
        key={mission.id}
        selectedMission={selectedMission!}
      />
    ));

  useEffect(() => {
    if (selectedMission) {
      const updatedMission = missions.find(
        (mission) => mission.id === selectedMission.id,
      );

      if (updatedMission) {
        dispatch(setSelectedMission(updatedMission));
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
            dispatch(setSelectedMission(null));
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
            dispatch(setSelectedMission(null));
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
        className="gradient-cp-red-3 relative mt-6 flex h-[800px] w-full border-2 border-cp-red p-10"
      >
        <div className="flex max-h-full w-[500px] flex-col gap-1 overflow-y-auto pr-4">
          {filteredMissions.length > 0 ? (
            filteredMissions
          ) : (
            <MissionsEmpty className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6">
              {missionsCategory === "active" ? (
                <>
                  <p className="text-2xl uppercase text-cp-red">
                    There is no active missions right now. Add one!
                  </p>
                  <CreateMissionButton />
                </>
              ) : (
                <>
                  <p className="text-2xl uppercase text-cp-red">
                    Your completed missions will appear here.
                  </p>
                </>
              )}
            </MissionsEmpty>
          )}
        </div>
        <div className="flex-1 pl-20">
          {selectedMission ? (
            <div className="flex flex-col items-center gap-10">
              <MissionDetails selectedMission={selectedMission} />
            </div>
          ) : filteredMissions.length > 0 ? (
            <MissionsEmpty className="flex h-full w-full items-center justify-center border-2 border-cp-red/20">
              <p className="text-2xl uppercase text-cp-red">
                Select mission to show details.
              </p>
            </MissionsEmpty>
          ) : null}
        </div>
      </motion.section>
    </>
  );
};

export default MissionsContainer;
