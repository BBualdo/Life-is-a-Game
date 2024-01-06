"use client";

import { useAppSelector } from "@/src/redux/store";

const UserGoal = () => {
  const goal = useAppSelector((state) => state.userReducer.currentGoal);

  return (
    <div className="flex-1 border border-white p-2">
      <h2 className="lg:text-md uppercase text-white xs:text-sm">
        Current Goal:
      </h2>
      <h3 className="text-center uppercase text-light-silver xs:text-xl lg:text-3xl">
        {goal || "Missing Data"}
      </h3>
    </div>
  );
};

export default UserGoal;
