import { ErrorMessage } from "formik";
import Input from ".";
import FormError from "../form-error";
import { Label } from "../label";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IProps = { [key: string]: any };

export const FormInput = ({
  name,
  label,
  id,
  placeholder,
  type,
  className,
  ...props
}: IProps) => {
  return (
    <div className="my-4">
      <Label label={label} {...props} />

      <Input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
      />

      <ErrorMessage
        name={name as string}
        children={(msg) => <FormError error={msg} />}
      />
    </div>
  );
};
