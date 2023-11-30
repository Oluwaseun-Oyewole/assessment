import { ButtonHTMLAttributes } from "react";

type IProps = { isLoading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({ children, className, isLoading, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center gap-3 font-medium rounded-full outline-0 w-full text-white px-0 py-4 ${className} disabled:cursor-not-allowed`}
    >
      {children} {isLoading && "Loading...."}
    </button>
  );
};

export default CustomButton;
