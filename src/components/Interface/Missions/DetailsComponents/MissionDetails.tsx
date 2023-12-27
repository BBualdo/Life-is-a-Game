"use client";

import { toggleSubtaskComplition } from "@/src/redux/slices/missionsSlice";
import { AppDispatch } from "@/src/redux/store";
import { Checkbox } from "@/src/shadcn/ui/checkbox";
import { Label } from "@/src/shadcn/ui/label";
import { MissionSchema } from "@/src/utils/types";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";

import { RiPencilLine } from "react-icons/ri";

const MissionDetails = ({
  selectedMission,
}: {
  selectedMission: MissionSchema;
}) => {
  const { id, title, description, subtasks } = selectedMission;
  const dispatch = useDispatch<AppDispatch>();

  const handleSubtaskChange = (subtaskId: string) => {
    dispatch(toggleSubtaskComplition({ missionId: id, subtaskId }));
  };

  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold uppercase text-cp-red shadow-black text-shadow-xl">
          {title}
        </h2>
        <button className="btn-red hover:btn-cyan border-2 p-1 transition-all duration-200">
          <RiPencilLine className="text-2xl font-bold" />
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {subtasks.map((subtask) => (
          <li
            key={subtask.id}
            className="flex items-center gap-4 border border-cp-red/30 bg-cp-red/10 p-2"
          >
            <Checkbox
              id={subtask.id}
              checked={subtask.isCompleted}
              onCheckedChange={() => handleSubtaskChange(subtask.id)}
            />
            <Label
              htmlFor={subtask.id}
              className={clsx("cursor-pointer text-base uppercase", {
                "text-cp-cyan/50 line-through": subtask.isCompleted,
                "text-cp-cyan": !subtask.isCompleted,
              })}
            >
              {subtask.title}
            </Label>
          </li>
        ))}
      </ul>
      <ProgressBar selectedMission={selectedMission} />
      <div className="max-h-[30vh] overflow-y-auto border-y border-cp-red p-4">
        <p className="text-cp-cyan">
          {description || "This mission has no description."}
        </p>
      </div>
    </div>
  );
};

export default MissionDetails;
