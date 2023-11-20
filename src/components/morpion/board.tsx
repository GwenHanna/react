import { useState } from "react";
import Squares from "./square";

export default function Board() {
  const [squares, setSquares] = useState<any>([Array(9).fill(" ")]);
  const [status, setStatus] = useState<string>("");
  let isNext: boolean = false;

  function handleClick(i: number) {
    const nextSquare = squares.slice();
    console.log("Next square" + nextSquare);
    if (i % 2 === 0) {
      nextSquare[i] = "O";
      setStatus("Tour de O");
    } else {
      nextSquare[i] = "X";
      setStatus("Tour de X");
    }
    setSquares(nextSquare);
    isNext = !isNext;
    console.log("square" + squares);
  }
  return (
    <>
      <p>{status}</p>

      <div className="container">
        <div>
          <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div>
          <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div>
          <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
