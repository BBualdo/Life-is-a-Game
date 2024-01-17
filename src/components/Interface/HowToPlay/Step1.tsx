"use client";

import React from "react";
import MenuLogo from "../shared/MenuLogo";
import Logo from "../shared/Logo";
import { arcade } from "@/src/fonts";

import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";

const Step1 = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        translate: -100 * (currentStep - 1) + "%",
      }}
      className="transition-translate flex h-full w-full flex-col duration-500"
    >
      <motion.div
        variants={fadeIn("", 0.2, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <Logo className="h-[100px] w-[100px] animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="flex w-full flex-col items-center gap-2">
          <h2 className="text-3xl uppercase text-white">
            Welcome to{" "}
            <span className="font-bold text-cp-cyan">Life is a Game</span>!
          </h2>
          <p className="w-1/2 text-center text-xl font-bold text-cp-red">
            Here you can bring your life skills to new levels (literally) by
            compliting missions given to you by yourself!
          </p>
          <p className="w-1/2 text-center text-xl font-bold text-white">
            This module will show you what to do to get started.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step1;
