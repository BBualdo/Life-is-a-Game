"use client";

import useUser from "@/src/utils/useUser";

const AchievementsBackdrop = () => {
  useUser();
  return (
    <div className="bg-achievements fixed bottom-0 top-0 z-[-1] w-full bg-center bg-no-repeat blur-md" />
  );
};

export default AchievementsBackdrop;
