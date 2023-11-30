import classNames from "classnames";

interface LabelType {
  id?: string;
  label?: string;
  className?: string;
}

export const Label = ({ id, label, className }: LabelType) => {
  return (
    <>
      <label
        htmlFor={id}
        className={classNames(
          "block my-2 md:text-base !text-sm text-black font-semibold",
          className
        )}
      >
        {label}
      </label>
    </>
  );
};
