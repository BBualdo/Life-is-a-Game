"use client";

import {
  completeMission,
  deleteMission,
  unlockAchievement,
} from "@/src/redux/slices/userSlice";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import { useDispatch } from "react-redux";
import Modal from "../../shared/Modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { giveXP } from "@/src/redux/slices/userSlice";
import { toast } from "sonner";

const MissionButtons = ({
  selectedMission,
}: {
  selectedMission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { totalMissionsCompleted, achievements } = useAppSelector(
    (state) => state.userReducer,
  );

  const dailyDifficulty = achievements.find(
    (achievement) =>
      achievement.requirements === "Complete mission on 'Daily' difficulty.",
  );
  const dropOfSweatDifficulty = achievements.find(
    (achievement) =>
      achievement.requirements ===
      "Complete mission on 'Drop of Sweat' difficulty.",
  );
  const challengingDifficulty = achievements.find(
    (achievement) =>
      achievement.requirements ===
      "Complete mission on 'Challenging' difficulty.",
  );
  const lifeHackerDifficulty = achievements.find(
    (achievement) =>
      achievement.requirements ===
      "Complete mission on 'Life-Hacker' difficulty.",
  );
  const antiProcrastinatorDifficulty = achievements.find(
    (achievement) =>
      achievement.requirements ===
      "Complete mission on 'Anti-Procrastinator' difficulty.",
  );
  const allDifficulties = achievements.find(
    (achievement) =>
      achievement.requirements ===
      "Complete one mission on every difficulty level.",
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const incompletedSubtasks = selectedMission.subtasks.filter(
    (subtask) => subtask.isCompleted === false,
  );

  const giveUpMission = () => {
    dispatch(deleteMission(selectedMission));
    dispatch(setSelectedMission(null));
    toast("Mission removed!");
  };

  const missionComplete = () => {
    dispatch(completeMission(selectedMission));
    dispatch(setSelectedMission(null));
    dispatch(giveXP(selectedMission));
    toast("Mission completed!", {
      description: `You received ${selectedMission.xp}XP.`,
    });
    // Complete Mission Achievements check
    switch (totalMissionsCompleted) {
      case 0: {
        const completeYourFirstMission = achievements.find(
          (achievement) =>
            achievement.requirements === "Complete your first mission.",
        );

        if (completeYourFirstMission && !completeYourFirstMission.isUnlocked) {
          dispatch(unlockAchievement(completeYourFirstMission!));
          dispatch(giveXP({ xp: completeYourFirstMission!.xp }));
        }
        break;
      }
      case 4: {
        const complete5Missions = achievements.find(
          (achievement) => achievement.requirements === "Complete 5 missions.",
        );
        if (complete5Missions && !complete5Missions.isUnlocked) {
          dispatch(unlockAchievement(complete5Missions!));
          dispatch(giveXP({ xp: complete5Missions!.xp }));
        }
        break;
      }
      case 9: {
        const complete10Missions = achievements.find(
          (achievement) => achievement.requirements === "Complete 10 missions.",
        );
        if (complete10Missions && !complete10Missions.isUnlocked) {
          dispatch(unlockAchievement(complete10Missions!));
          dispatch(giveXP({ xp: complete10Missions!.xp }));
        }
        break;
      }
      case 24: {
        const complete25Missions = achievements.find(
          (achievement) => achievement.requirements === "Complete 25 missions.",
        );
        if (complete25Missions && !complete25Missions.isUnlocked) {
          dispatch(unlockAchievement(complete25Missions!));
          dispatch(giveXP({ xp: complete25Missions!.xp }));
        }
        break;
      }
      case 49: {
        const complete50Missions = achievements.find(
          (achievement) => achievement.requirements === "Complete 50 missions.",
        );
        if (complete50Missions && !complete50Missions.isUnlocked) {
          dispatch(unlockAchievement(complete50Missions!));
          dispatch(giveXP({ xp: complete50Missions!.xp }));
        }
        break;
      }
    }
    // Difficulty Level Achievements check
    switch (selectedMission.difficulty) {
      case "Daily": {
        if (dailyDifficulty && !dailyDifficulty.isUnlocked) {
          dispatch(unlockAchievement(dailyDifficulty));
          dispatch(giveXP({ xp: dailyDifficulty.xp }));
        }
        break;
      }
      case "Drop of Sweat": {
        if (dropOfSweatDifficulty && !dropOfSweatDifficulty.isUnlocked) {
          dispatch(unlockAchievement(dropOfSweatDifficulty));
          dispatch(giveXP({ xp: dropOfSweatDifficulty.xp }));
        }
        break;
      }
      case "Challenging": {
        if (challengingDifficulty && !challengingDifficulty.isUnlocked) {
          dispatch(unlockAchievement(challengingDifficulty));
          dispatch(giveXP({ xp: challengingDifficulty.xp }));
        }
        break;
      }
      case "Life-Hacker": {
        if (lifeHackerDifficulty && !lifeHackerDifficulty.isUnlocked) {
          dispatch(unlockAchievement(lifeHackerDifficulty));
          dispatch(giveXP({ xp: lifeHackerDifficulty.xp }));
        }
        break;
      }
      case "Anti-Procrastinator": {
        if (
          antiProcrastinatorDifficulty &&
          !antiProcrastinatorDifficulty.isUnlocked
        ) {
          dispatch(unlockAchievement(antiProcrastinatorDifficulty));
          dispatch(giveXP({ xp: antiProcrastinatorDifficulty.xp }));
        }
        break;
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-20">
        <button onClick={openModal} className="btn btn-red hover:bg-cp-red/50">
          Give up
        </button>
        <button
          onClick={missionComplete}
          disabled={incompletedSubtasks.length !== 0}
          className="btn btn-green enabled:hover:bg-cp-green/50"
        >
          Complete Mission
        </button>
      </div>
      {isOpen && (
        <Modal className={["modal-cyan"]} isOpen={isOpen}>
          <div className="flex w-full items-center justify-between border-b border-cp-cyan">
            <h2 className="text-xl text-cp-cyan">Give Up Mission</h2>
            <IoClose
              onClick={closeModal}
              className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center xs:p-2 lg:p-10">
              <h2 className="text-center font-bold text-cp-red xs:text-xl lg:text-3xl">
                Are you sure you want to give up this mission?
              </h2>
              <p className="text-center text-cp-red xs:text-sm lg:text-lg">
                Progress will be lost and it can't be undone!
              </p>
            </div>
            <div className="flex items-center xs:gap-2 xs:max-lg:flex-col lg:gap-10">
              <button
                onClick={giveUpMission}
                className="btn btn-red hover:bg-cp-red/50"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="btn btn-cyan hover:bg-cp-cyan/50"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MissionButtons;
