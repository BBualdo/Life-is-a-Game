import { Calendar } from "@/src/shadcn/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/shadcn/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/shadcn/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

const DeadlinePicker = ({
  form,
}: {
  form: UseFormReturn<
    { difficulty: string; title: string; description: string; deadline: Date },
    any,
    undefined
  >;
}) => {
  return (
    <FormField
      control={form.control}
      name="deadline"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Deadline
          </FormLabel>
          <FormDescription className="bg-black py-1 text-center uppercase text-cp-cyan">
            Set deadline for extra challenge and reward.
          </FormDescription>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="text-md flex w-full items-center justify-center gap-4 border-2 border-cp-yellow py-2 text-cp-yellow transition-all duration-200 hover:bg-black"
                  >
                    {field.value ? format(field.value, "PPP") : "Pick a date"}
                    <CalendarIcon />
                  </button>
                  <button
                    type="button"
                    disabled={Boolean(field.value)}
                    className="btn btn-red enabled:hover:bg-cp-red/50"
                  >
                    Cancel Deadline
                  </button>
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date <= new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription className="bg-black py-1 text-center uppercase text-cp-red">
            If not completed until this day - your mission will be failed.
          </FormDescription>
        </FormItem>
      )}
    />
  );
};

export default DeadlinePicker;
