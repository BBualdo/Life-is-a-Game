"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiPowerButton } from "react-icons/gi";
import { useEffect, useState } from "react";
import CircleProgressBar from "./CircleProgressBar";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import { levelUp } from "@/src/redux/slices/userSlice";
import { toast } from "sonner";

const UserAvatar = () => {
  const { xp, level } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const calculateProgress = () => {
    let progress = (xp / level.ceil) * 100;

    if (progress >= 100) {
      dispatch(levelUp());
      toast(`You have reached level ${level.level + 1}!`);
      progress = (xp / level.ceil) * 100;
    }

    return progress;
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleBodyClick = () => {
      setIsOpen(false);
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div
          onClick={() => setIsOpen(true)}
          className="relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full transition-all duration-200 lg:border-2 lg:border-light-silver lg:hover:border-cp-cyan"
        >
          <Image src="/assets/images/bbualdo-avatar.jpg" alt="" fill />
        </div>
        <div className="absolute -top-[2] z-[-1] lg:hidden">
          <CircleProgressBar progress={calculateProgress()} circleWidth={60} />
        </div>

        <div className="absolute -bottom-3 flex h-[20px] w-[20px] rotate-45 items-center justify-center border-2 border-light-silver bg-black lg:hidden">
          <p className="text-md -rotate-45 font-bold text-cp-cyan">
            {level.level}
          </p>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          className="absolute border-2 border-cp-cyan bg-black xs:max-lg:-top-12 xs:max-lg:right-0 lg:-bottom-14 lg:w-full"
        >
          <Link href="/login">
            <button className="flex h-full w-full items-center gap-2 p-2 text-xl uppercase text-cp-red transition-all duration-300 hover:bg-cp-cyan/20">
              <GiPowerButton /> Logout
            </button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default UserAvatar;
