import TaskListItem from "@/features/task/components/TaskListItem";
import { TaskItem } from "@/features/task/types";

export const metadata = {
  title: "Sample ToDo List",
};

const tasks: TaskItem[] = [
  {
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    href: "#",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    title: "Michael Foster",
    description: "michael.foster@example.com",
    href: "#",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    title: "Dries Vincent",
    description: "dries.vincent@example.com",
    href: "#",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    title: "Lindsay Walton",
    description: "lindsay.walton@example.com",
    href: "#",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    title: "Courtney Henry",
    description: "courtney.henry@example.com",
    href: "#",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    title: "Tom Cook",
    description: "tom.cook@example.com",
    href: "#",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
];

export default function Home() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {tasks.map((task) => (
        <li className="py-5" key={task.href}>
          <TaskListItem task={task} />
        </li>
      ))}
    </ul>
  );
}
