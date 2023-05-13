import clsx from "clsx";

export type TagType = "Success";

interface Props {
  className?: string;
  name: string;
  status?: TagType;
}

const Tag: React.FunctionComponent<Props> = ({ className, name }) => {
  return (
    <span
      className={clsx(
        "bg-blue-100",
        "text-blue-800",
        "text-sm",
        "font-medium",
        "px-2.5",
        "py-0.5",
        "rounded",
        className,
      )}
      key={name}
    >
      {name}
    </span>
  );
};

export default Tag;
