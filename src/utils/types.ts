export type SubtaskType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type MissionSchema = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  xp: number;
  subtasks: SubtaskType[];
};
