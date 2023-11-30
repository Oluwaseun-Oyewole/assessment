import { IoAlert } from "react-icons/io5";

type IProps = {
  error?: string;
};

const FormError = ({ error }: IProps) => {
  return (
    <div className="!text-red-400 mt-[5px] flex items-center justify-end">
      <IoAlert className="!text-red-400 inline-block !text-sm leading-4" />
      <span className="text-sm text-red-600"> {error}</span>
    </div>
  );
};

export default FormError;
