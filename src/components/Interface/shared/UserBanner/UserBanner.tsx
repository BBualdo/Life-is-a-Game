"use client";

import Image from "next/image";
import UserXP from "./UserXP";
import { useEffect, useState } from "react";
import { GiPowerButton } from "react-icons/gi";
import Link from "next/link";
import { motion } from "framer-motion";

const UserBanner = () => {
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
    <div className="flex items-center gap-10">
      <UserXP />
      <div
        onClick={() => setIsOpen(true)}
        className="relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full border-2 border-cp-red transition-all duration-200 hover:border-white"
      >
        <Image src="/assets/images/bbualdo-avatar.jpg" alt="" fill />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          className="absolute -bottom-14 w-full border-2 border-cp-cyan bg-black"
        >
          <Link href="/login">
            <button className="flex h-full w-full items-center gap-2 p-2 text-xl uppercase text-cp-red transition-all duration-300 hover:bg-cp-cyan/20">
              <GiPowerButton /> Logout
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default UserBanner;
