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
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex w-full items-end justify-between text-cp-red">
        <p className="text-2xl">
          Level: <span className="text-4xl font-bold">{level.level}</span>
        </p>
        <p className="text-xl">
          XP:{" "}
          <span className="font-bold">
            {xp}/{level.ceil}
          </span>
        </p>
      </div>
      <div className="h-[20px] w-full -skew-x-12 bg-cp-red/30">
        <div
          className={`gradient-cp-red h-full transition-all duration-700`}
          style={{ width: calculateProgress() + "%" }}
        />
      </div>
    </div>
  );
};

export default UserXP;
