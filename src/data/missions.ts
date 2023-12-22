import { MissionSchema } from "../utils/types";

type Missions = {
  active: MissionSchema[];
  completed: MissionSchema[];
};

export const missions: Missions = {
  active: [
    {
      id: "agasgsedgsfgsfgdfgd",
      title: "Mission 1",
      description: "",
      difficulty: "Challenging",
      xp: 150,
      subtasks: [
        {
          id: "agasgsedgasfsdfgsgasfgsfgdfgd",
          title: "Subtask 1",
          isCompleted: false,
        },
        {
          id: "agasgsedrjkhglk,hjlghdfgsfgsfgdfgd",
          title: "Subtask 2",
          isCompleted: false,
        },
      ],
    },
    {
      id: "ghrdhdfthfdghfgh",
      title: "Mission 2",
      description: "Test Description",
      difficulty: "Daily",
      xp: 30,
      subtasks: [
        { id: "dgfgsgg", title: "Subtask 1", isCompleted: false },
        {
          id: "agasgsgdsfsafafasfgsgsedgsfgsfgdfgd",
          title: "Subtask 2",
          isCompleted: false,
        },
      ],
    },
  ],
  completed: [
    {
      id: "agasgsedgagdsdgsdgdrgd",
      title: "Mission 3",
      description: "",
      difficulty: "Life-Hacker",
      xp: 345,
      subtasks: [
        {
          id: "agaseryteryerrtefgsfgdfgd",
          title: "Subtask 1",
          isCompleted: false,
        },
        { id: "e6e6eyethdfhdhg", title: "Subtask 2", isCompleted: false },
      ],
    },
    {
      id: "dsaddaffghhjjy87785456",
      title: "Mission 4",
      description: "",
      difficulty: "Anti-Procrastinator",
      xp: 625,
      subtasks: [
        {
          id: "agaseryteryerrtefgsfgdfgd",
          title: "Subtask 1",
          isCompleted: false,
        },
        { id: "e6e6eyethdfhdhg", title: "Subtask 2", isCompleted: false },
      ],
    },
  ],
};
