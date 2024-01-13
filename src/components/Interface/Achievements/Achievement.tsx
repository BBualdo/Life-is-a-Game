import { Achievement } from "@/src/utils/types";

const Achievement = ({ achievement }: { achievement: Achievement }) => {
  return (
    <div key={achievement.id} className="text-white">
      <h3>{achievement.title}</h3>
      <p>{achievement.requirements}</p>
      <p>{achievement.xp} XP</p>
    </div>
  );
};

export default Achievement;
