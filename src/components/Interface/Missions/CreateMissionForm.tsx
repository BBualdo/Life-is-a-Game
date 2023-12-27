"use client";

import { Form } from "@/src/shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Title from "./FormComponents/Title";
import Description from "./FormComponents/Description";
import DifficultyPicker from "./FormComponents/DifficultyPicker";
import SubtasksList from "./FormComponents/SubtasksList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { addActiveMission } from "@/src/redux/slices/missionsSlice";
import { v4 as uuidv4 } from "uuid";

export const missionFormSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(6, { message: "Mission title is too short." })
    .max(50, { message: "Mission title is too long." }),
  description: z.string().max(2000),
  difficulty: z.string(),
  xp: z.number(),
  subtasks: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      isCompleted: z.boolean(),
    }),
  ),
});

const CreateMissionForm = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof missionFormSchema>>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      id: uuidv4(),
      title: "",
      description: "",
      difficulty: "Challenging",
      xp: 150,
      subtasks: [],
    },
  });

  function onSubmit(values: z.infer<typeof missionFormSchema>) {
    if (values.subtasks.length === 0) {
      values.subtasks.push({
        id: uuidv4(),
        title: values.title,
        isCompleted: false,
      });
    }
    dispatch(addActiveMission(values));
    closeModal();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <Title form={form} />
        <Description form={form} />
        <DifficultyPicker form={form} />
        <SubtasksList form={form} />
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
