"use client";

import { arcade } from "@/src/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";

const MenuLogo = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.7, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <Image
        src="/assets/images/logo.png"
        alt="Gamepad Logo"
        width={100}
        height={100}
        priority
      />
      <h1 className={`${arcade.className} text-cp-red text-5xl`}>LiaG</h1>
    </motion.div>
  );
};

export default MenuLogo;
