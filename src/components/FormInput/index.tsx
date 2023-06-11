export type TagType = "Success";

interface Props {
  className?: string
  label: string;
  name: string;
  children: React.ReactNode;
  helperText?: string;
}

const FormInput: React.FunctionComponent<Props> = ({
  className,
  label,
  name,
  children,
  helperText,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {helperText !== undefined && (
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormInput;
