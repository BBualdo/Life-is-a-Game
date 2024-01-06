"use client";

import { useAppSelector } from "@/src/redux/store";

const UserBio = () => {
  const bio = useAppSelector((state) => state.userReducer.bio);

  return (
    <div className="mt-4 flex max-h-[200px] flex-col border border-white p-2">
      <h2 className="lg:text-md uppercase text-white xs:text-sm">Bio:</h2>
      <h3 className="text-center uppercase text-light-silver xs:text-xl lg:text-3xl">
        {bio || "Missing Data"}
      </h3>
    </div>
  );
};

export default UserBio;
