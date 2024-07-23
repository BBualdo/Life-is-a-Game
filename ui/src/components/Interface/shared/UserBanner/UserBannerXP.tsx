"use client";

import { toast } from "sonner";
import useUser from "@/src/utils/hooks/useUser";
import levels from "@/src/data/levels";

const UserBannerXP = () => {
  const { xp, level } = useUser()!;

  const calculateProgress = () => {
    let progress = (xp / levels[level - 1].ceil) * 100;

    if (progress >= 100) {
      //TODO: Implement leveling up
      toast(`You have reached level ${level + 1}!`);
      progress = (xp / levels[level - 1].ceil) * 100;
    }

    return progress;
  };

  return (
    <div className="flex items-start gap-2">
      <h3 className="text-4xl text-cp-cyan">{level}</h3>
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

export default UserBannerXP;
