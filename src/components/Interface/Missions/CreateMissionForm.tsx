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
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { addMission } from "@/src/redux/slices/userSlice";
import { v4 as uuidv4 } from "uuid";
import { missionFormSchema } from "@/src/utils/schemas";
import { setSelectedMission } from "@/src/redux/slices/selectedMissionSlice";
import { toast } from "sonner";
import { giveXP, unlockAchievement } from "@/src/redux/slices/userSlice";

const CreateMissionForm = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { totalMissionsAdded, achievements } = useAppSelector(
    (state) => state.userReducer,
  );

  const form = useForm<z.infer<typeof missionFormSchema>>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      id: uuidv4(),
      status: "active",
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
    dispatch(addMission(values));
    dispatch(setSelectedMission(values));
    toast("Mission has been added!");
    // Add your first Mission Achievement check
    if (totalMissionsAdded === 0) {
      const addYourFirstMission = achievements.find(
        (achievement) => achievement.requirements === "Add your first mission.",
      );

      if (addYourFirstMission && !addYourFirstMission.isUnlocked) {
        dispatch(unlockAchievement(addYourFirstMission));
        dispatch(giveXP({ xp: addYourFirstMission.xp }));
      }
    }
    closeModal();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <Title form={form} />
        <Description form={form} />
        <DifficultyPicker form={form} />
        <SubtasksList form={form} />
        <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-10">
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
