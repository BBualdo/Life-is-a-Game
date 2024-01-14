"use client";

import achievements from "@/src/data/achievements";
import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import Achievement from "./Achievement";

const AchievementsContainer = () => {
  const achievementsList = achievements.map((achievement) => (
    <Achievement achievement={achievement} />
  ));

  return (
    <motion.section
      variants={fadeIn("", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative flex w-full overflow-y-auto bg-transparent xs:p-2 lg:p-10"
    >
      <div className="flex w-full flex-col">{achievementsList}</div>
    </motion.section>
  );
};

export default AchievementsContainer;
