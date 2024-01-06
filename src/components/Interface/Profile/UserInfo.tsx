"use client";

import { useAppSelector } from "@/src/redux/store";

const UserInfo = () => {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <>
      <div className="mt-4 flex gap-4">
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Username:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {user.username}
          </h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Email Address:
          </h2>
          <h3 className="text-cp-red xs:text-xl lg:text-3xl">{user.email}</h3>
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            First Name:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {user.firstName}
          </h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Last Name:
          </h2>
          <h3 className="text-center uppercase text-light-silver xs:text-xl lg:text-3xl">
            {user.lastName || "Missing Data"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
