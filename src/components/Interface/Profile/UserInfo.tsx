"use client";

import { useAppSelector } from "@/src/redux/store";

const UserInfo = () => {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <>
      <div className="mt-4 flex gap-4">
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Username:</h2>
          <h3 className="text-3xl font-bold text-cp-red">{user.username}</h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Email Address:</h2>
          <h3 className="text-3xl text-cp-red">{user.email}</h3>
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">First Name:</h2>
          <h3 className="text-3xl font-bold text-cp-red">{user.firstName}</h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Last Name:</h2>
          <h3 className="text-center text-3xl uppercase text-light-silver">
            {user.lastName || "Missing Data"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
