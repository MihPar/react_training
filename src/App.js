import object from "./App.module.css"
import { useState } from "react";

export default function Board() {
    let [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick() {
        let nextSquares = squares.slice()
        nextSquares[0] = "X"
        setSquares(nextSquares)
    }

    return (
      <div>
        <div>
          <Square value={squares[0]} onSquareClick={handleClick} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div>
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div>
          <Square value={squares[6]} />
          <Square value={squares[8]} />
          <Square value={squares[9]} />
        </div>
      </div>
    );
  }
  
  function Square({value, onSquareClick}) {
    return <button className={object.square} onClick={onSquareClick}>{value}</button>;
  }
  