import { ChangeEvent, useState } from "react";
import { flexColumn } from "../../utils/design";

interface inputInterface {
  label: string;
  value?: any;
  id?: string;
  onChange: any;
}

export function Input(input: inputInterface) {
  const [value, setValue] = useState<string>(input.value);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    input.onChange(e.target.value);
  }
  return (
    <div>
      <label>{input.label}</label>
      <input
        className={flexColumn.join(" ")}
        id={input.id}
        value={value}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
