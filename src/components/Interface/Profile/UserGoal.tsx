"use client";

import { useAppSelector } from "@/src/redux/store";
import MissingData from "../shared/MissingData";

const UserGoal = () => {
  const goal = useAppSelector((state) => state.userReducer.currentGoal);

  return (
    <div className="flex-1 border border-white p-2">
      <h2 className="lg:text-md uppercase text-white xs:text-sm">
        Current Goal:
      </h2>
      {goal ? (
        <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">{goal}</h3>
      ) : (
        <MissingData />
      )}
    </div>
  );
};

export default UserGoal;
