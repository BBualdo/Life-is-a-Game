type DifficultyLevels = {
  id: number;
  title: string;
  description: string;
  eg: string[];
};

export const difficultyLevels: Array<DifficultyLevels> = [
  {
    id: 0,
    title: "Daily",
    description: "Quick and easy tasks for your daily routine.",
    eg: ["Doing laundry", "Washing dishes", "Taking a short walk"],
  },
  {
    id: 1,
    title: "Drop of Sweat",
    description: "Tasks that require a moderate amount of effort and focus.",
    eg: [
      "Going to gym",
      "Cooking a special meal",
      "Reading a chapter of a book",
    ],
  },
  {
    id: 2,
    title: "Challenging",
    description: "Challenging tasks that may take some time to complete.",
    eg: [
      "Learning a new language",
      "Completing a complex workout routine",
      "Starting a personal blog",
    ],
  },
  {
    id: 3,
    title: "Life-Hacker",
    description: "Challenging tasks for those seeking personal growth.",
    eg: [
      "Participating in a fitness challenge",
      "Embarking on a weekend adventure",
      "Learning a complex skill",
    ],
  },
  {
    id: 4,
    title: "Anti-Procrastinator",
    description: "Epic tasks for those aiming for significant achievements.",
    eg: ["Writing a book", "Completing a marathon", "Starting a business"],
  },
];
