"use client";

import { useAppSelector } from "@/src/redux/store";

const UserXP = () => {
  const { xp, level } = useAppSelector((state) => state.userReducer);

  return (
    <div className="flex items-start gap-2">
      <h3 className="text-4xl text-cp-cyan">{level}</h3>
      <div className="flex w-[100px] flex-col items-start gap-1">
        <p className="text-xl uppercase text-cp-cyan">level</p>
        <div className="h-1 w-full bg-cp-cyan/20 shadow-xl shadow-cp-cyan">
          <div
            className="h-full bg-cp-cyan transition-all duration-700"
            style={{ width: xp + "%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserXP;
