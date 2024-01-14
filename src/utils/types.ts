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

export type User = {
  id: string | undefined;
  avatar: string;
  username: string;
  email: string | undefined;
  firstName: string;
  lastName: string | undefined;
  xpGained: number;
  currentGoal: string | undefined;
  bio: string | undefined;
  level: Level;
  xp: number;
  achievements: Achievement[];
};

export type UserProfileEditType = {
  firstName: string;
  lastName?: string | undefined;
  username: string;
  currentGoal?: string | undefined;
  bio?: string | undefined;
};

export type Achievement = {
  id: string;
  title: string;
  requirements: string;
  image: string;
  xp: number;
  isUnlocked: boolean;
};
