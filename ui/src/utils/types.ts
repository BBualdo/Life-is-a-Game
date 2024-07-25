export type SubtaskType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type DifficultiesType =
  | "Daily"
  | "Drop of Sweat"
  | "Challenging"
  | "Life-Hacker"
  | "Anti-Procrastinator";

export type DifficultyLevel = {
  id: number;
  title: DifficultiesType;
  description: string;
  eg: { id: number; title: string }[];
  xpMultiplier: number;
};

export type MissionSchema = {
  id: string;
  status: "active" | "completed";
  title: string;
  description: string;
  difficulty: DifficultiesType;
  xp: number;
  subtasks: SubtaskType[];
  creationDate: string;
  completionDate: string;
};

export type Level = { level: number; ceil: number };

export type UserProfileEditType = {
  firstName: string;
  lastName?: string | undefined;
  username: string;
  currentGoal?: string | undefined;
  bio?: string | undefined;
};

export type AchievementType = {
  id: string;
  title: string;
  requirements: string;
  image: string;
  xp: number;
  isUnlocked: boolean;
  unlockDate: string;
};
