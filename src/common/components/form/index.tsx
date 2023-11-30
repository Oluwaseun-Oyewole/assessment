import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "file"
  | "textarea"
  | "search";
type InputSize = "small" | "medium" | "large";

export type InputPropsType = {
  id?: string;
  name?: string;
  label?: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
  value?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

const sizeMap: { [key in InputSize]: string } = {
  small: "py-4 text-base",
  medium: "py-6 text-base",
  large: "py-8 text-base",
};

export const Input = ({
  id,
  name,
  label,
  type = "text",
  size = "small",
  className,
  placeholder,
  value,
  ...props
}: InputPropsType) => {
  return (
    <div className="flex relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        autoComplete="off"
        className={classNames(
          `w-full !font-clash block px-2 outline-none transition-colors ease-in-out focus:border-blue-200 rounded-full font-medium text-primaryColor placeholder:font-medium placeholder:text-sm border-b-[2px]`,
          sizeMap[size],
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
