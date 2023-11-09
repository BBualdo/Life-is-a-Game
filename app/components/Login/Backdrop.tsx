"use client";

import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    <motion.div
      initial={{ filter: "blur(0px)" }}
      animate={{ filter: "blur(4px)" }}
      aria-hidden
      className="bg-black fixed top-0 bottom-0 w-full bg-rog bg-no-repeat bg-center min-h-screen z-[-10]"
    />
  );
};

export default Backdrop;
