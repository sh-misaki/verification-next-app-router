import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import Tag from "@/components/Tag";
import { TaskRequest } from "@/features/task/types";

interface Props {
  task: TaskRequest;
}

const TaskForm: React.FunctionComponent<Props> = ({
  task: { id, title, description, date, tags },
}) => {
  return (
    <form>
      <div>
        <h2 className="border-b pb-2 text-base font-semibold leading-7 text-gray-900">
          Task
        </h2>

        <input type="hidden" name="id" value={id} />

        <div className="mt-4 flex flex-col gap-y-6 pb-8">
          <FormInput label="Title" name="title">
            <input
              id="title"
              name="title"
              value={title}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </FormInput>

          <FormInput
            label="About"
            name="about"
            helperText="Write a few sentences about yourself."
          >
            <textarea
              id="about"
              name="about"
              rows={5}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {description}
            </textarea>
          </FormInput>

          <FormInput label="Date" name="date">
            <input
              id="date"
              name="date"
              value={date}
              type="date"
              className="w-fullbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </FormInput>

          <FormInput label="Tags" name="tag_item">
            <input
              id="tag_item"
              name="tag_item"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="mt-4 flex gap-x-2">
              {tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </FormInput>
        </div>
      </div>

      <div className="pt-8 border-t flex items-center justify-end gap-x-6">
        <Button>
          Cancel
        </Button>
        <Button
          type="submit"
          status="primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
