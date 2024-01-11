"use client";

import { motion } from "framer-motion";
import LastestAchievements from "./LastestAchievements";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import UserXP from "./UserXP";
import { fadeIn } from "@/src/utils/fadeIn";
import CustomBorder from "../shared/CustomBorder";
import UserStats from "./UserStats";
import UserBio from "./UserBio";
import UserGoal from "./UserGoal";
import EditProfileButton from "./EditProfileButton";
import { useAppSelector } from "@/src/redux/store";

const UserData = () => {
  const user = useAppSelector((state) => state.userReducer);

  return (
    <motion.section
      variants={fadeIn("", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen w-full xs:max-lg:pb-[130px]"
    >
      <CustomBorder />
      <div className="flex border-b border-white py-2 xs:max-lg:flex-col">
        <div className="flex items-center justify-center">
          <UserAvatar user={user} />
        </div>
        <div className="flex flex-1 flex-col items-end justify-between">
          <EditProfileButton
            user={user}
            className="btn btn-red items-end hover:bg-cp-red/30 xs:max-lg:hidden"
          >
            Edit Profile
          </EditProfileButton>
          <UserXP user={user} />
        </div>
      </div>
      <UserInfo user={user} />
      <UserStats user={user} />
      <UserGoal user={user} />
      <UserBio user={user} />
      <LastestAchievements />
    </motion.section>
  );
};

export default UserData;
