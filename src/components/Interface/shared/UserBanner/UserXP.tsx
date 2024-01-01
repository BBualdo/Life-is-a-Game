"use client";

import { levelUp } from "@/src/redux/slices/userSlice";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { useDispatch } from "react-redux";

const UserXP = () => {
  const { xp, level } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const calculateProgress = () => {
    let progress = (xp / level.ceil) * 100;

    if (progress >= 100) {
      dispatch(levelUp());
      progress = (xp / level.ceil) * 100;
    }

    return progress;
  };

  return (
    <div className="flex items-start gap-2">
      <h3 className="text-4xl text-cp-cyan">{level.level}</h3>
      <div className="flex w-[100px] flex-col items-start gap-1">
        <p className="text-xl uppercase text-cp-cyan">level</p>
        <div className="h-1 w-full bg-cp-cyan/20 shadow-xl shadow-cp-cyan">
          <div
            className="h-full bg-cp-cyan transition-all duration-700"
            style={{ width: calculateProgress() + "%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserXP;
