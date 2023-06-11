import TaskList from "@/features/task/components/TaskList";

export const metadata = {
  title: "Sample ToDo List",
};

export default function Home() {
  return (
    <div className="px-4 py-8">
      <TaskList />
    </div>
  );
}
