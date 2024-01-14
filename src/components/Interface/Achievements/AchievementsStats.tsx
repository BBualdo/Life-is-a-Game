import achievements from "@/src/data/achievements";

const AchievementsStats = () => {
  const completedAchievements = achievements.filter(
    (achievement) => achievement.isUnlocked === true,
  );

  const progress = Math.floor(
    (completedAchievements.length / achievements.length) * 100,
  );

  return (
    <div className="flex items-center gap-20 border-2 border-cp-cyan bg-black px-20 py-4">
      <div className="flex flex-col items-center gap-2">
        <h3 className="xs:text-md uppercase lg:text-lg">Completed:</h3>
        <p className="xs:text-xl lg:text-3xl">
          {completedAchievements.length}/{achievements.length}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="xs:text-md uppercase lg:text-lg">Progress %:</h3>
        <p className="xs:text-xl lg:text-3xl">{progress}%</p>
      </div>
    </div>
  );
};

export default AchievementsStats;
