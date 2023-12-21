import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/shadcn/ui/form";
import { Slider } from "@/src/shadcn/ui/slider";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

const DifficultySlider = ({
  form,
  difficulty,
  setDifficulty,
}: {
  form: UseFormReturn<
    { difficulty: string; title: string; description: string },
    any,
    undefined
  >;
  difficulty: number[];
  setDifficulty: Dispatch<SetStateAction<number[]>>;
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
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default DifficultySlider;
