"use client";

import {
  completeMission,
  deleteMission,
} from "@/src/redux/slices/missionsSlice";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { AppDispatch } from "@/src/redux/store";
import { MissionSchema } from "@/src/utils/types";
import { useDispatch } from "react-redux";
import Modal from "../../shared/Modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { giveXP } from "@/src/redux/slices/userSlice";

const MissionButtons = ({
  selectedMission,
}: {
  selectedMission: MissionSchema;
}) => {
  const dispatch = useDispatch<AppDispatch>();
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
  };

  const missionComplete = () => {
    dispatch(completeMission(selectedMission));
    dispatch(setSelectedMission(null));
    dispatch(giveXP(selectedMission));
  };

  return (
    <>
      <div className="flex items-center justify-center gap-20">
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
        <Modal isOpen={isOpen}>
          <div className="flex w-full items-center justify-between border-b border-cp-cyan">
            <h2 className="text-xl text-cp-cyan">Give Up Mission</h2>
            <IoClose
              onClick={closeModal}
              className="cursor-pointer text-3xl text-cp-cyan transition-all duration-200 hover:text-cp-red-hover"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center p-10">
              <h2 className="text-3xl text-cp-red">
                Are you sure you want to give up this mission?
              </h2>
              <p className="text-lg text-cp-red">
                Progress will be lost and it can't be undone!
              </p>
            </div>
            <div className="flex items-center gap-10">
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
