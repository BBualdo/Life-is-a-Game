"use client";

import { useAppSelector } from "@/src/redux/store";

const UserBio = () => {
  const bio = useAppSelector((state) => state.userReducer.bio);

  return (
    <div className="mt-4 flex max-h-[200px] flex-col border border-white p-2">
      <h2 className="uppercase text-white">Bio:</h2>
      <h3 className="text-center text-3xl uppercase text-light-silver">
        {bio || "Missing Data"}
      </h3>
    </div>
  );
};

export default UserBio;
