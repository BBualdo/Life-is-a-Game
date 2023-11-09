"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[132px] flex flex-col text-white text-2xl"
    >
      <div>
        <span aria-hidden className="text-cp-cyan">
          L
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[1000, "ife"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span aria-hidden className="text-cp-cyan">
          I
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[1500, "s"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span aria-hidden className="text-cp-cyan">
          A
        </span>
      </div>
      <div>
        <span aria-hidden className="text-cp-cyan">
          G
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[2000, "ame"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
    </motion.div>
  );
};

export default Logo;
