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
import { v4 as uuidv4 } from "uuid";
import { missionFormSchema } from "@/src/utils/schemas";
import { toast } from "sonner";
import useUser from "@/src/utils/hooks/useUser";
import MissionsService from "@/src/services/MissionsService";
import { addMission } from "@/src/redux/slices/missionsSlice";

const CreateMissionForm = ({ closeModal }: { closeModal: () => void }) => {
  const user = useUser()!;
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof missionFormSchema>>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: 2,
      xpReward: 150,
      subtasks: [],
      userId: user.id,
    },
  });

  async function onSubmit(values: z.infer<typeof missionFormSchema>) {
    if (values.subtasks.length === 0) {
      values.subtasks.push({
        id: uuidv4(),
        title: values.title,
        isCompleted: false,
      });
    }

    await MissionsService.addMission(values)
      .then((res) => {
        dispatch(addMission(res.data));
        toast("Mission has been added!");
      })
      .catch((error) => {
        //TODO: Handle errors
        toast.error("Adding mission failed!");
      });

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
