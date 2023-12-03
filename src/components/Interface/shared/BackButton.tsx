"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowBigLeftDash } from "react-icons/lu";

const BackButton = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-3/5"
    >
      <Link href="/">
        <button className="text-4xl text-cp-red transition-all duration-200 hover:text-cp-red/50">
          <LuArrowBigLeftDash />
        </button>
      </Link>
    </motion.div>
  );
};

export default BackButton;
