import * as z from "zod";

// Mission Schema
export const missionFormSchema = z.object({
  id: z.string(),
  status: z.union([z.literal("active"), z.literal("completed")]),
  title: z
    .string()
    .min(6, { message: "Mission title is too short." })
    .max(50, { message: "Mission title is too long." }),
  description: z.string().max(2000),
  difficulty: z.union([
    z.literal("Daily"),
    z.literal("Drop of Sweat"),
    z.literal("Challenging"),
    z.literal("Life-Hacker"),
    z.literal("Anti-Procrastinator"),
  ]),
  xp: z.number(),
  subtasks: z.array(
    z.object({
      id: z.string(),
      title: z.string().max(50, { message: "Subtask title is too long." }),
      isCompleted: z.boolean(),
    }),
  ),
  creationDate: z.string(),
  completionDate: z.string(),
});
