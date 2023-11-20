import { useState } from "react";
import { Button } from "../buttons/btn-count";
import { button, flexColumn } from "../../utils/design";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function counter() {
    if (count >= 0) {
      setCount((count) => count + 1);
    }
  }

  return (
    <div className={flexColumn.join(" ") + " col-2"}>
      <h3>Counter</h3>
      <Button
        classname={button.join(" ")}
        value={"Incrémenter"}
        onClick={counter}
      />
      {count && count > 0 && count}
    </div>
  );
}
