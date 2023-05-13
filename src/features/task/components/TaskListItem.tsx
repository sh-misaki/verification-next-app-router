import Tag from "@/components/Tag";
import { TaskItem, TaskRequest } from "@/features/task/types";

interface Props {
  task: TaskItem;
  onSelect: (task: TaskRequest) => void;
}

const TaskListItem: React.FunctionComponent<Props> = ({ task, onSelect }) => {
  return (
    <div className="flex w-full">
      <input type="checkbox" className="mr-4" />
      <div onClick={() => onSelect(task)} className="py-3 cursor-pointer flex-1">
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
          <div className="ml-4 flex gap-x-2">
            {task.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListItem;
