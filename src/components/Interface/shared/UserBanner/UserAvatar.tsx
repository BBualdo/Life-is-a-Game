"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiPowerButton } from "react-icons/gi";
import { useEffect, useState } from "react";

const UserAvatar = () => {
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
      <div
        onClick={() => setIsOpen(true)}
        className="relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full border-2 border-cp-red transition-all duration-200 hover:border-white xs:max-lg:h-[40px] xs:max-lg:w-[40px]"
      >
        <Image src="/assets/images/bbualdo-avatar.jpg" alt="" fill />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          className="absolute border-2 border-cp-cyan bg-black xs:-top-12 xs:max-lg:right-0 lg:-bottom-14 lg:w-full"
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
