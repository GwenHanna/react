import { ChangeEvent } from "react";

interface checkboxInterface {
  checked: boolean;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(checkbox: checkboxInterface) {
  return (
    <div>
      <label htmlFor="">{checkbox.label}</label>
      <input
        type="checkbox"
        checked={checkbox.checked}
        onChange={checkbox.onChange}
      />
    </div>
  );
}
