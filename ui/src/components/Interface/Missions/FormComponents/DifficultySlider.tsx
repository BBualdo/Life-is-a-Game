"use client";

import { difficultyLevels } from "@/src/data/difficultyLevels";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/shadcn/ui/form";
import { Slider } from "@/src/shadcn/ui/slider";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { missionFormSchema } from "@/src/utils/schemas";

const DifficultySlider = ({
  form,
  difficulty,
  setDifficulty,
  difficultyLevel,
}: {
  form: UseFormReturn<z.infer<typeof missionFormSchema>>;
  difficulty: number[];
  setDifficulty: Dispatch<SetStateAction<number[]>>;
  difficultyLevel: number;
}) => {
  return (
    <FormField
      control={form.control}
      name="difficulty"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Difficulty
          </FormLabel>
          <FormControl>
            <Slider
              value={difficulty}
              onValueChange={(value) => {
                setDifficulty(value);
                field.onChange((field.value = difficultyLevel));
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default DifficultySlider;
