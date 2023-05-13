import TaskList from "@/features/task/components/TaskList";
import { TaskItem } from "@/features/task/types";

export const metadata = {
  title: "Sample ToDo List",
};

const tasks: TaskItem[] = [
  {
    id: 1,
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 2,
    title: "Michael Foster",
    description: "michael.foster@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 3,
    title: "Dries Vincent",
    description: "dries.vincent@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 4,
    title: "Lindsay Walton",
    description: "lindsay.walton@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 5,
    title: "Courtney Henry",
    description: "courtney.henry@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 6,
    title: "Tom Cook",
    description: "tom.cook@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
];

export default function Home() {
  return (
    <div className="px-4 py-8">
      <TaskList tasks={tasks} />
    </div>
  );
}
