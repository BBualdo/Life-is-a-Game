import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/shadcn/ui/form";
import { MissionSchema } from "@/src/utils/types";
import { UseFormReturn } from "react-hook-form";

const SubtasksList = ({ form }: { form: UseFormReturn<MissionSchema> }) => {
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
          <FormControl></FormControl>
        </FormItem>
      )}
    />
  );
};

export default SubtasksList;
