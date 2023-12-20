"use client";

import { difficultyLevels } from "@/src/data/difficultyLevels";
import { useState, useEffect } from "react";

const DifficultyInfo = ({ difficulty }: { difficulty: number[] }) => {
  const [difficultyLevel, setDifficultyLevel] = useState(2);
  const [points] = difficulty;

  const xp = Math.floor(
    (points + 25) * difficultyLevels[difficultyLevel].xpMultiplier,
  );

  useEffect(() => {
    if (points >= 95) {
      setDifficultyLevel(4);
    } else if (points >= 75) {
      setDifficultyLevel(3);
    } else if (points >= 50) {
      setDifficultyLevel(2);
    } else if (points >= 25) {
      setDifficultyLevel(1);
    } else {
      setDifficultyLevel(0);
    }
  }, [points]);

  return (
    <div className="flex items-start gap-1">
      <div className="flex flex-1 flex-col gap-4 border-2 border-cp-cyan bg-black p-8">
        <div className="text-center font-bold">
          <h3 className="text-xl uppercase text-cp-red">
            {difficultyLevels[difficultyLevel].title}
          </h3>
          <p className="text-sm text-cp-red">
            XP Multiplier: {difficultyLevels[difficultyLevel].xpMultiplier}x
          </p>
        </div>

        <p className="text-center text-cp-cyan">
          {difficultyLevels[difficultyLevel].description}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-cp-yellow">Examples:</p>
          <ul>
            {difficultyLevels[difficultyLevel].eg.map((example) => (
              <li className="text-cp-yellow" key={example.id}>
                - {example.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 border-2 border-cp-cyan bg-black p-8">
        <h3 className="text-xl font-bold uppercase text-cp-yellow">Reward:</h3>
        <div className="flex justify-center text-cp-cyan">
          <p className="text-6xl">
            {xp}
            <span className="text-xl">XP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifficultyInfo;
