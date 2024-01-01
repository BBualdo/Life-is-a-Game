"use client";

import { useAppSelector } from "@/src/redux/store";

const UserGoal = () => {
  const goal = useAppSelector((state) => state.userReducer.currentGoal);

  return (
    <div className="flex-1 border border-white p-2">
      <h2 className="uppercase text-white">Current Goal:</h2>
      <h3 className="text-center text-3xl uppercase text-light-silver">
        {goal || "Missing Data"}
      </h3>
    </div>
  );
};

export default UserGoal;
