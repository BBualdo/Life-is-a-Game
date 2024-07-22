interface IUser {
  id: string;
  username: string;
  email: string;
  firstName: string | undefined;
  lastName: string | undefined;
  xpGained: number;
  currentGoal: string | undefined;
  bio: string | undefined;
  xp: number;
  level: number;
  totalMissionsAdded: number;
  totalMissionsCompleted: number;
  totalXpGained: number;
  avatarUrl: string;
  hasCompletedTutorial: boolean;
}

export default IUser;
