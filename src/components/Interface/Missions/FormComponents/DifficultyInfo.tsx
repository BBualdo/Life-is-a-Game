"use client";

import { difficultyLevels } from "@/src/data/difficultyLevels";
import { FormField } from "@/src/shadcn/ui/form";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

const DifficultyInfo = ({
  form,
  difficultyLevel,

  xp,
}: {
  form: UseFormReturn<
    { difficulty: string; title: string; description: string; xp: number },
    any,
    undefined
  >;
  difficultyLevel: number;
  xp: number;
}) => {
  const { setValue } = form;

  useEffect(() => {
    setValue("xp", xp);
  }, [setValue, xp]);

  return (
    <FormField
      control={form.control}
      name="xp"
      render={({ field }) => {
        return (
          <div className="flex items-stretch gap-1">
            <div className="flex flex-1 flex-col gap-4 border-2 border-cp-cyan bg-black p-8">
              <div className="text-center font-bold">
                <h3 className="text-xl uppercase text-cp-red">
                  {difficultyLevels[difficultyLevel].title}
                </h3>
                <p className="text-sm text-cp-red">
                  XP Multiplier:{" "}
                  {difficultyLevels[difficultyLevel].xpMultiplier}x
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
            <div className="flex flex-1 flex-col gap-1">
              <div className="border-2 border-cp-cyan bg-black p-8">
                <p className="text-md text-center text-cp-red">
                  Adjust difficulty to your preferences. If something is
                  slightly harder than one level, but not that hard as the next
                  one, keep the slider at the top range of that level rather
                  than going straight to the next. Just be fair with yourself!
                </p>
              </div>
              <div className="border-2 border-cp-cyan bg-black p-8">
                <h3 className="text-xl font-bold uppercase text-cp-yellow">
                  Reward:
                </h3>
                <div className="flex justify-center text-cp-cyan">
                  <p className="text-6xl">
                    {xp}
                    <span className="text-xl">XP</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default DifficultyInfo;
