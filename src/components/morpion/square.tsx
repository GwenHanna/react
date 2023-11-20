import { button } from "../../utils/design";
import { Button } from "../buttons/btn-count";

interface squareInterface {
  value: string;
  onSquareClick: any;
}

export default function Squares(square: squareInterface) {
  return (
    <Button
      classname={button.join(" ") + " p-3"}
      value={square.value}
      onClick={square.onSquareClick}
    />
  );
}
