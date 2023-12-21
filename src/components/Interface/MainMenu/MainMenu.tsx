"use client";

import Link from "next/link";
import MenuLogo from "../shared/MenuLogo";
import links from "@/src/data/nav-links";
import { useRouter } from "next/navigation";
import { GiPowerButton } from "react-icons/gi";
import Backdrop from "./Backdrop";

import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";

const navLinks = links.map((link) => (
  <Link key={link.key} href={link.href}>
    <button
      disabled={link.disabled}
      className="btn-menu w-full text-white hover:border-cp-cyan hover:text-cp-cyan disabled:text-white/50 disabled:hover:border-transparent"
    >
      {link.title}
    </button>
  </Link>
));

const MainMenu = () => {
  const router = useRouter();

  return (
    <>
      <Backdrop />
      <section className="px-[120px]">
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
          <button
            className="btn-menu flex items-center gap-2 text-cp-red hover:border-cp-red hover:text-cp-red-hover"
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
