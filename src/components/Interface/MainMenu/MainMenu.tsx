"use client";

import Link from "next/link";
import MenuLogo from "../shared/MenuLogo";
import links from "@/src/data/nav-links";
import { useRouter } from "next/navigation";
import { GiPowerButton } from "react-icons/gi";
import Backdrop from "./Backdrop";

import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";
import { useState } from "react";

const MainMenu = () => {
  const router = useRouter();
  const [audio] = useState(new Audio("/assets/audio/hoverEffect.mp3"));

  const playSound = (disabled: boolean) => {
    if (!disabled) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const navLinks = links.map((link) => (
    <Link
      onMouseEnter={() => playSound(link.disabled)}
      key={link.key}
      href={link.href}
    >
      <button
        disabled={link.disabled}
        className="btn-menu w-full text-white hover:border-cp-cyan hover:text-cp-cyan disabled:text-white/50 disabled:hover:border-transparent"
      >
        {link.title}
      </button>
    </Link>
  ));

  return (
    <>
      <Backdrop />
      <section className="xs:px-4 md:px-[120px]">
        <MenuLogo />
        <motion.div
          variants={fadeIn("right", 0.7, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 text-white"
        >
          <button
            disabled
            className="btn-menu text-white hover:border-cp-cyan hover:text-cp-cyan disabled:text-white/50 disabled:hover:border-transparent"
          >
            How to Play
          </button>
          {navLinks}
          <button
            disabled
            className="btn-menu text-white hover:border-cp-cyan hover:text-cp-cyan disabled:text-white/50 disabled:hover:border-transparent"
          >
            Settings
          </button>
          {/* TODO: Allow to log out when authentication will be implemented */}
          <button
            disabled
            className="btn-menu flex items-center gap-2 text-cp-red enabled:hover:border-cp-red enabled:hover:text-cp-red-hover disabled:text-cp-red/50"
            onClick={() => router.push("/login")}
          >
            <GiPowerButton />
            Logout
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default MainMenu;
