export type SubtaskType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type MissionSchema = {
  id: string;
  status: "active" | "completed";
  title: string;
  description: string;
  difficulty: string;
  xp: number;
  subtasks: SubtaskType[];
};

export type EditMissionSchema = {
  id: string;
  title: string;
  description: string;
  subtasks: SubtaskType[];
};

export type Level = { level: number; ceil: number };
