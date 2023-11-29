"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    <motion.video
      autoPlay
      loop
      variants={fadeIn("", 1.5, 0.7, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      aria-hidden
      className="bg-black fixed blur-sm top-0 bottom-0 w-full object-cover min-h-screen z-[-10]"
    >
      <source src="/assets/images/night-city.webm" type="video/webm" />
    </motion.video>
  );
};

export default Backdrop;
