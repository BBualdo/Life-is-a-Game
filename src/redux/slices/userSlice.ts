import achievements from "@/src/data/achievements";
import levels from "@/src/data/levels";
import {
  Achievement,
  MissionSchema,
  User,
  UserProfileEditType,
} from "@/src/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: undefined,
  avatar: "",
  username: "",
  email: "",
  firstName: "",
  lastName: undefined,
  xpGained: 0,
  currentGoal: undefined,
  bio: undefined,
  level: levels[0],
  xp: 0,
  achievements: achievements,
  totalMissionsAdded: 0,
  totalMissionsCompleted: 0,
  missions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Profile Reducers
    createUser: (
      state,
      action: PayloadAction<{
        id: string;
        firstName: string;
        lastName: string | undefined;
        username: string;
        currentGoal: string | undefined;
      }>,
    ) => {
      const { id, firstName, lastName, username, currentGoal } = action.payload;

      return { ...state, id, firstName, lastName, username, currentGoal };
    },
    updateProfile: (state, action: PayloadAction<UserProfileEditType>) => {
      const { firstName, lastName, username, currentGoal, bio } =
        action.payload;
      return { ...state, firstName, lastName, username, currentGoal, bio };
    },
    updateAvatar: (state, action: PayloadAction<{ avatar: string }>) => {
      const { avatar } = action.payload;
      state.avatar = avatar;
    },

    // XP Reducers
    giveXP: (state, action: PayloadAction<{ xp: number }>) => {
      const { xp } = action.payload;
      const updatedXP = state.xp + xp;
      state.xp = updatedXP;
      state.xpGained = state.xpGained + xp;
    },
    levelUp: (state) => {
      const nextLevelIndex = state.level.level;
      const nextLevel = levels[nextLevelIndex];
      if (nextLevel) {
        state.xp = state.xp - state.level.ceil;
        state.level = nextLevel;
      }
    },

    // Achievement Reducers
    unlockAchievement: (state, action: PayloadAction<Achievement>) => {
      const achievementToUnlock = action.payload;

      if (!achievementToUnlock.isUnlocked) {
        const updatedAchievement = {
          ...achievementToUnlock,
          isUnlocked: true,
        };
        const updatedAchievements = state.achievements.map((achievement) =>
          achievement.id === updatedAchievement.id
            ? updatedAchievement
            : achievement,
        );
        state.achievements = updatedAchievements;
      }
    },

    // Missions Schema
    addMission: (state, action: PayloadAction<MissionSchema>) => {
      state.missions.push(action.payload);
      state.totalMissionsAdded = state.totalMissionsAdded + 1;
    },
    toggleSubtaskComplition: (
      state,
      action: PayloadAction<{ missionId: string; subtaskId: string }>,
    ) => {
      const { missionId, subtaskId } = action.payload;
      const mission = state.missions.find(
        (mission) => mission.id === missionId,
      );

      if (mission) {
        const updatedSubtasks = mission.subtasks.map((subtask) =>
          subtask.id === subtaskId
            ? { ...subtask, isCompleted: !subtask.isCompleted }
            : subtask,
        );
        mission.subtasks = updatedSubtasks;
      }
    },
    updateMission: (state, action: PayloadAction<MissionSchema>) => {
      const { id, title, description, subtasks } = action.payload;

      const missionToUpdate = state.missions.find(
        (mission) => mission.id === id,
      );

      if (missionToUpdate) {
        const updatedMission = {
          ...missionToUpdate,
          title,
          description,
          subtasks,
        };

        const missionIndex = state.missions.findIndex(
          (mission) => mission.id === id,
        );

        const updatedMissions = [...state.missions];
        updatedMissions[missionIndex] = updatedMission;

        state.missions = updatedMissions;
      }
    },
    deleteMission: (state, action: PayloadAction<MissionSchema>) => {
      const { id } = action.payload;

      const missionToDelete = state.missions.find(
        (mission) => mission.id === id,
      );

      if (missionToDelete) {
        const filteredMissions = state.missions.filter(
          (mission) => mission !== missionToDelete,
        );

        state.missions = filteredMissions;
      }
    },
    completeMission: (state, action: PayloadAction<MissionSchema>) => {
      const { id } = action.payload;

      const missionToComplete = state.missions.find(
        (mission) => mission.id === id,
      );

      if (missionToComplete) {
        const updatedMissions = state.missions.map((mission) =>
          mission.id === id
            ? { ...mission, status: "completed" as const }
            : mission,
        );
        state.missions = updatedMissions;
        state.totalMissionsCompleted = state.totalMissionsCompleted + 1;
      }
    },
  },
});

export const {
  createUser,
  updateProfile,
  updateAvatar,
  giveXP,
  levelUp,
  unlockAchievement,
  addMission,
  completeMission,
  toggleSubtaskComplition,
  updateMission,
  deleteMission,
} = userSlice.actions;
export default userSlice.reducer;
