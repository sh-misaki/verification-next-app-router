import { TaskItem } from "@/features/task/types";

interface Props {
    task: TaskItem
}

const TaskListItem: React.FunctionComponent<Props> = ({ task }) => {
  return (
    <div className="flex">
      <input type="checkbox" className="mr-4" />
      <a href={task.href}>
        <div className="flex gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {task.title}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {task.description}
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <p className="mt-1 text-xs leading-5 text-gray-500">
            <time dateTime={task.date}>{task.date}</time>
          </p>
          <div className="ml-2">
            {task.tags.map((tag) => (
              <span
                className="mx-1 bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default TaskListItem