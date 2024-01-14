import { Achievement } from "@/src/utils/types";
import clsx from "clsx";

const Achievement = ({ achievement }: { achievement: Achievement }) => {
  return (
    <div
      key={achievement.id}
      className={clsx(
        "flex items-center justify-between border-y border-light-silver/20 p-4 text-white transition-all duration-200 hover:bg-white/10",
        { "opacity-50": !achievement.isUnlocked },
      )}
    >
      <div className="flex flex-col">
        <h3 className="text-white shadow-white text-shadow-lg xs:text-lg lg:text-xl">
          {achievement.title}
        </h3>
        <p className="lg:text-md text-light-silver xs:text-sm">
          {achievement.requirements}
        </p>
      </div>

      <p className="xs:text-md text-cp-white font-bold lg:text-lg">
        {achievement.xp} XP
      </p>
    </div>
  );
};

export default Achievement;
