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
import DifficultySlider from "./FormComponents/DifficultySlider";
import { useState } from "react";
import DifficultyInfo from "./FormComponents/DifficultyInfo";
import DeadlinePicker from "./FormComponents/DeadlinePicker";
import Title from "./FormComponents/Title";
import Description from "./FormComponents/Description";

export const missionFormSchema = z.object({
  title: z
    .string()
    .min(6, { message: "Mission title is too short." })
    .max(50, { message: "Mission title is too long." }),
  description: z.string().max(2000),
  difficulty: z.string(),
  deadline: z.date(),
});

const CreateMissionForm = ({ closeModal }: { closeModal: () => void }) => {
  const [difficulty, setDifficulty] = useState<number[]>([50]);

  const form = useForm<z.infer<typeof missionFormSchema>>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: "Normal",
      deadline: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof missionFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <Title form={form} />
        <Description form={form} />
        <DifficultySlider
          form={form}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <DifficultyInfo difficulty={difficulty} />
        <DeadlinePicker form={form} />
        <div className="flex items-center justify-center gap-10">
          <button className="btn btn-yellow hover:bg-black">Create</button>
          <button
            onClick={closeModal}
            type="button"
            className="btn btn-red hover:bg-cp-red/50"
          >
            Cancel
          </button>
        </div>
      </form>
    </Form>
  );
};

export default CreateMissionForm;
