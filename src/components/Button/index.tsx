import clsx from "clsx";

export type ButtonStatus = "default" | "primary" | "success";

type Props = {
  status?: ButtonStatus;
} & React.ComponentProps<"button">;

const Button: React.FunctionComponent<Props> = ({
  className,
  children,
  status = "default",
  ...props
}) => {
  let statusClassName = "text-gray-800 bg-white hover:bg-gray-100 focus-visible:outline-gray-600"
  switch (status) {
    case "primary":
      statusClassName = "text-white bg-blue-500 hover:bg-blue-700 focus-visible:outline-blue-600"
    case "success":
      statusClassName = "text-white bg-green-600 hover:bg-green-500 focus-visible:outline-green-600"
  }

  return (
    <button
      {...props}
      className={clsx(
        "rounded-md",
        "px-3",
        "py-2",
        "text-sm",
        "font-semibold",
        "shadow-sm",
        "focus-visible:outline",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        statusClassName,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
