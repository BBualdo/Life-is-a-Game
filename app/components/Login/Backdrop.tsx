"use client";

import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    <motion.video
      initial={{ filter: "blur(0px)" }}
      animate={{ filter: "blur(4px)" }}
      aria-hidden
      className="bg-black fixed top-0 bottom-0 w-full object-cover min-h-screen z-[-10]"
      loop={true}
      autoPlay={true}
    >
      <source src="/assets/images/rog.webm" type="video/webm" />
    </motion.video>
  );
};

export default Backdrop;
