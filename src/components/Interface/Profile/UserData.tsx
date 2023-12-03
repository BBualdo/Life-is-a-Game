"use client";

import { motion } from "framer-motion";
import LastestAchievements from "./LastestAchievements";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import UserXP from "./UserXP";
import { fadeIn } from "@/src/utils/fadeIn";
import CustomBorder from "../shared/CustomBorder";

const UserData = () => {
  return (
    <motion.section
      variants={fadeIn("", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-3/5"
    >
      <CustomBorder />
      <div className="flex border-b border-white py-2">
        <UserAvatar />
        <div className="flex flex-1 flex-col items-end justify-between">
          <button className="btn btn-red items-end hover:bg-cp-red/30">
            Edit Profile
          </button>
          <UserXP />
        </div>
      </div>
      <UserInfo />
      <LastestAchievements />
    </motion.section>
  );
};

export default UserData;
