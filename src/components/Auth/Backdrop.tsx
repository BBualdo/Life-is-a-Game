"use client";

import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    <motion.video
      autoPlay
      loop
      muted
      initial={{ filter: "blur(0px)", opacity: 1 }}
      animate={{ filter: "blur(8px)", opacity: 0.7 }}
      aria-hidden
      className="bg-black fixed top-0 bottom-0 w-full object-cover min-h-screen z-[-10]"
    >
      <source src="/assets/images/rog.webm" type="video/webm" />
    </motion.video>
  );
};

export default Backdrop;
