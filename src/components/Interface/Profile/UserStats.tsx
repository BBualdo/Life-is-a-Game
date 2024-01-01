"use client";

import { useAppSelector } from "@/src/redux/store";

const UserStats = () => {
  const { xpGained } = useAppSelector((state) => state.userReducer);
  const missions = useAppSelector((state) => state.missionsReducer.missions);

  const missionsCompleted = missions.filter(
    (mission) => mission.status === "completed",
  );
  const missionsActive = missions.filter(
    (missions) => missions.status === "active",
  );

  return (
    <>
      <div className="flex">
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Missions Completed:</h2>
          <h3 className="text-3xl font-bold text-cp-red">
            {missionsCompleted.length}
          </h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Missions Active:</h2>
          <h3 className="text-3xl font-bold text-cp-red">
            {missionsActive.length}
          </h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Gained XP:</h2>
          <h3 className="text-3xl font-bold text-cp-red">{xpGained}</h3>
        </div>
      </div>
    </>
  );
};

export default UserStats;
