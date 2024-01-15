import { Achievement } from "@/src/utils/types";
import clsx from "clsx";

const Achievement = ({ achievement }: { achievement: Achievement }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between border-y border-light-silver/20 p-4 text-white transition-all duration-200 hover:bg-white/10",
        { "opacity-50": !achievement.isUnlocked },
      )}
    >
      <div className="flex flex-col xs:max-lg:max-w-[70%]">
        <h3 className="text-white shadow-white text-shadow-lg xs:text-lg lg:text-xl">
          {achievement.title}
        </h3>
        <p className="lg:text-md text-light-silver xs:text-sm">
          {achievement.requirements}
        </p>
      </div>

      <p className="xs:text-md text-cp-white flex items-center gap-1 font-bold lg:text-lg">
        {achievement.xp} <p>XP</p>
      </p>
    </div>
  );
};

export default Achievement;
