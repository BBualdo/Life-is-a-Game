"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";

const MissionsContainer = () => {
  return (
    <motion.section
      variants={fadeIn("", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="gradient-cp-pink h-[800px] w-full border-2 border-cp-cyan"
    ></motion.section>
  );
};

export default MissionsContainer;
