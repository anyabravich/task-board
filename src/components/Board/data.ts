import { ITask } from "./types";

export const TASKS: ITask[] = [
  {
    id: 1,
    icon: "⏰",
    title: "Task in Progress",
    status: "progress",
  },
  {
    id: 2,
    icon: "🏋",
    title: "Task Completed",
    status: "completed",
  },
  {
    id: 3,
    icon: "☕️",
    title: "Task Won't Do",
    status: "wontdo",
  },
  {
    id: 4,
    icon: "📚",
    title: "Task To Do",
    description: "Work on a devChallenges.io learn TypeScript.",
  },
];
