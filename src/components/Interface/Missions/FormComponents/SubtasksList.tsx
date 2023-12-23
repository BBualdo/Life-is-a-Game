"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";
import { MissionSchema, SubtaskType } from "@/src/utils/types";
import { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Subtask from "./Subtask";

import { v4 as uuidv4 } from "uuid";

const SubtasksList = ({ form }: { form: UseFormReturn<MissionSchema> }) => {
  const [subtasksArr, setSubtasksArr] = useState<SubtaskType[]>([]);

  const subtaskInput = useRef<HTMLInputElement>(null);

  const addSubtask = () => {
    setSubtasksArr((prev) => [
      ...prev,
      { id: uuidv4(), title: subtaskInput.current!.value, isCompleted: false },
    ]);
  };

  const subtasks = subtasksArr.map((subtask) => (
    <div key={subtask.id} className="flex w-full items-center gap-4">
      <Subtask>{subtask.title}</Subtask>
      <button className="btn btn-red hover:bg-cp-red/50">Remove Subtask</button>
    </div>
  ));

  return (
    <FormField
      control={form.control}
      name="subtasks"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Subtasks
          </FormLabel>
          <FormDescription className="text-cp-yellow/80">
            Set your mission to smaller parts. This will keep you motivated!
          </FormDescription>
          <div className="flex max-h-[500px] flex-col gap-4 overflow-y-scroll">
            {subtasks}
          </div>
          <FormControl>
            <div className="flex items-center gap-4">
              <Input ref={subtaskInput} />
              <button
                type="button"
                onClick={addSubtask}
                className="btn btn-cyan hover:bg-cp-cyan/50"
              >
                Add Subtask
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SubtasksList;
