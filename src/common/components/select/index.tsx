import React from "react";

type OptionValue = string | number;

type Props<Value extends OptionValue> = {
  value: Value;
  onChange: (newValue: Value) => void;
  options: readonly Value[];
};

export default function CustomSelect<Value extends OptionValue>({
  value,
  onChange,
  options,
}: Props<Value>) {
  return (
    <select
      value={value}
      onChange={(event: React.FormEvent<HTMLSelectElement>) => {
        const selectedOption = options[event.currentTarget.selectedIndex];
        onChange(selectedOption);
      }}
      className="w-full text-sm"
    >
      {options.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
