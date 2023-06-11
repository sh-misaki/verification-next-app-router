"use client";

import TaskForm from "@/features/task/components/Form";
import TaskListItem from "@/features/task/components/TaskListItem";
import { TaskRequest } from "@/features/task/types";
import { useCallback, useState } from "react";
import { trpc } from '@/utils/trpc/hook';

interface Props {}

const TaskList: React.FunctionComponent<Props> = () => {
  const tasksQuery = trpc.tasks.useQuery();
  const taskCreator = trpc.taskCreate.useMutation();

  const [formTask, handleFormTaskChange] = useState<TaskRequest>({
    id: 0,
    title: "",
    description: "",
    date: "",
    tags: [],
  });

  const createTask = useCallback(() => {
    taskCreator.mutate({ name: formTask.title })
  }, [formTask, taskCreator])

  if (!tasksQuery.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start gap-x-6">
      <div className="flex-1 flex flex-col gap-y-6">
        {tasksQuery.data.tasks.map((task) => (
          <TaskListItem
            task={task}
            onSelect={handleFormTaskChange}
            key={task.id}
          />
        ))}
      </div>
      <div className="flex-1">
        <div className="sticky top-0 right-0 w-100 bg-gray-100 py-4 px-6 rounded-md">
          <TaskForm task={formTask} onSubmit={createTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
