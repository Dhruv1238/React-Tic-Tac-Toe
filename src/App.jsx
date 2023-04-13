import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value, onSquareClick}){
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

function board() {
  const[xIsNext, setXIsNext]= useState(true);
  const[squares,setSquares]=useState(Array(9).fill(null));

  function handleClick(i){
    const nexSquares= squares.slice();
    if (xIsNext){
    nexSquares[i]="X";
    }
    else{
      nexSquares[i]="O"
    }
    setSquares(nexSquares)
    setXIsNext(!xIsNext);
  }

  return (
  <>
    <div>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}  />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}  />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}  />
    </div>
    <div>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}  />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}  />
    </div>
    <div>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}  />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}  />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}  />
    </div>
  </>
  );
}

export default board