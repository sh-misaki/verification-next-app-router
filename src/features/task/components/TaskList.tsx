"use client";

import TaskForm from "@/features/task/components/Form";
import TaskListItem from "@/features/task/components/TaskListItem";
import { TaskRequest } from "@/features/task/types";
import { useState } from "react";
import { trpc } from '@/utils/trpc/hook';

interface Props {}

const TaskList: React.FunctionComponent<Props> = () => {
  const tasksRes = trpc.tasks.useQuery();

  const [formTask, handleFormTaskChange] = useState<TaskRequest>({
    id: 0,
    title: "",
    description: "",
    date: "",
    tags: [],
  });

  if (!tasksRes.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start gap-x-6">
      <div className="flex-1 flex flex-col gap-y-6">
        {tasksRes.data.tasks.map((task) => (
          <TaskListItem
            task={task}
            onSelect={handleFormTaskChange}
            key={task.id}
          />
        ))}
      </div>
      <div className="flex-1">
        <div className="sticky top-0 right-0 w-100 bg-gray-100 py-4 px-6 rounded-md">
          <TaskForm task={formTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
