"use client";

import { AppDispatch } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import Modal from "../../shared/Modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import IMission from "@/src/models/IMission";
import { clearSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import MissionsService from "@/src/services/MissionsService";
import { deleteMission } from "@/src/redux/slices/missionsSlice";

const MissionButtons = ({ selectedMission }: { selectedMission: IMission }) => {
  const dispatch = useDispatch<AppDispatch>();

  // const achievements = useAchievements();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const uncompletedSubtasks = selectedMission.subtasks.filter(
    (subtask) => !subtask.isCompleted,
  );

  async function giveUpMission() {
    // TODO: 'Give up a mission with at least one subtask completed.' achievement check
    await MissionsService.deleteMission(selectedMission.id)
      .then(() => {
        dispatch(deleteMission(selectedMission.id));
        dispatch(clearSelectedMission());
        toast("Mission removed!");
      })
      .catch(() => {
        toast.error("Mission deleting failed!");
      });

    closeModal();
  }

  const missionComplete = () => {
    // TODO: Complete Mission
    dispatch(clearSelectedMission());
    // TODO: Give XP
    toast("Mission completed!", {
      description: `You received ${selectedMission.xpReward}XP.`,
    });
  };

  return (
    <>
      <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-20">
        <button onClick={openModal} className="btn btn-red hover:bg-cp-red/50">
          Give up
        </button>
        <button
          onClick={missionComplete}
          disabled={uncompletedSubtasks.length !== 0}
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
