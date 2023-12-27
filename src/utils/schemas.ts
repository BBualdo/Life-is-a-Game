import * as z from "zod";

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
