"use client";

import { useAppSelector } from "@/src/redux/store";
import MissingData from "../shared/MissingData";

const UserBio = () => {
  const bio = useAppSelector((state) => state.userReducer.bio);

  return (
    <div className="mt-4 flex max-h-[200px] flex-col border border-white p-2">
      <h2 className="lg:text-md uppercase text-white xs:text-sm">Bio:</h2>
      {bio ? (
        <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">{bio}</h3>
      ) : (
        <MissingData />
      )}
    </div>
  );
};

export default UserBio;
