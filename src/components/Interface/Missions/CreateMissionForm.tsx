"use client";

import { Textarea } from "@/src/shadcn/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import DifficultySlider from "./DifficultySlider";
import { useState } from "react";
import DifficultyInfo from "./DifficultyInfo";

export const missionFormSchema = z.object({
  title: z
    .string()
    .min(6, { message: "Mission title is too short." })
    .max(50, { message: "Mission title is too long." }),
  description: z.string().max(2000),
  difficulty: z.string(),
});

const CreateMissionForm = () => {
  const [difficulty, setDifficulty] = useState<number[]>([50]);

  const form = useForm<z.infer<typeof missionFormSchema>>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: "Normal",
    },
  });

  function onSubmit(values: z.infer<typeof missionFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
                Title
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription className="text-cp-yellow/80">
                This is the final goal you want to achieve.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
                Description
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription className="text-cp-yellow/80">
                This is your draft. Make your plan here or write down how you
                want to approach your mission.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DifficultySlider
          form={form}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <DifficultyInfo difficulty={difficulty} />
      </form>
    </Form>
  );
};

export default CreateMissionForm;
