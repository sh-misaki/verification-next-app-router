"use client";

import TaskForm from "@/features/task/components/Form";
import TaskListItem from "@/features/task/components/TaskListItem";
import { TaskItem, TaskRequest } from "@/features/task/types";
import { useState } from "react";

interface Props {
  tasks: TaskItem[];
}

const TaskList: React.FunctionComponent<Props> = ({ tasks }) => {
  const [formTask, handleFormTaskChange] = useState<TaskRequest>({
    id: 0,
    title: "",
    description: "",
    date: "",
    tags: [],
  });

  return (
    <div className="flex items-start gap-x-6">
      <div className="flex-1 flex flex-col gap-y-6">
        {tasks.map((task) => (
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
