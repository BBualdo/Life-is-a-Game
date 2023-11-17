"use client";

import useUser from "@/src/hooks/useUser";

const ProfileAvatar = () => {
  const { user } = useUser();

  const getInitials = () => {
    if (user) {
      const usernameArr = user.name.split(" ");
      let initials = "";
      for (let i = 0; i < usernameArr.length && i < 2; i++) {
        initials += usernameArr[i].charAt(0);
      }
      return initials;
    }
  };

  return (
    <div>
      {user && (
        <div className="w-[50px] h-[50px] rounded-full text-cp-cyan text-3xl flex items-center justify-center bg-black border-2 border-cp-cyan">
          {getInitials()}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
