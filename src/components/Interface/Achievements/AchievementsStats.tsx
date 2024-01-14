"use client";

import { useAppSelector } from "@/src/redux/store";

const AchievementsStats = () => {
  const achievements = useAppSelector(
    (state) => state.userReducer.achievements,
  );

  const completedAchievements = achievements.filter(
    (achievement) => achievement.isUnlocked === true,
  );

  const progress = Math.floor(
    (completedAchievements.length / achievements.length) * 100,
  );

  const calculateTotalXP = () => {
    let xp = 0;
    achievements.forEach((achievement) => {
      xp += achievement.xp;
    });
    return xp;
  };

  const calculateGainedXP = () => {
    let xp = 0;
    completedAchievements.forEach((achievement) => {
      xp += achievement.xp;
    });
    return xp;
  };

  return (
    <div className="flex items-center gap-20 border-2 border-cp-cyan bg-cp-red/20 px-20 py-4">
      <div className="flex flex-col items-center gap-2">
        <h3 className="xs:text-md font-bold uppercase lg:text-lg">
          Completed:
        </h3>
        <p className="xs:text-xl lg:text-3xl">
          {completedAchievements.length}/{achievements.length}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="xs:text-md font-bold uppercase lg:text-lg">
          Progress %:
        </h3>
        <p className="xs:text-xl lg:text-3xl">{progress}%</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="xs:text-md font-bold uppercase lg:text-lg">Total XP:</h3>
        <p className="xs:text-xl lg:text-3xl">
          {calculateGainedXP()}/{calculateTotalXP()}
        </p>
      </div>
    </div>
  );
};

export default AchievementsStats;
