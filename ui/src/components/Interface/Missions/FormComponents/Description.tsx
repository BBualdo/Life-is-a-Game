import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Textarea } from "@/src/shadcn/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import addMissionFormSchema from "@/src/schemas/addMissionFormSchema";
import editMissionFormSchema from "@/src/schemas/editMissionFormSchema";

const Description = ({
  form,
}: {
  form:
    | UseFormReturn<z.infer<typeof addMissionFormSchema>>
    | UseFormReturn<z.infer<typeof editMissionFormSchema>>;
}) => {
  return (
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
            This is your draft. Make your plan here or write down how you want
            to approach your mission.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Description;
