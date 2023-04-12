import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value, onSquareClick}){

  // const [value,setValue]= useState(null);

  //   function handleClick(){
  //   setValue('X');
  // }
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>);
}

function board() {

  const[squares,setSquares]=useState(Array(9).fill(null));

  function handleClick(){
    const nexSquares= squares.slice();
    nexSquares[i]="X";
    setSquares(nexSquares)
  }

  return (
  <>
    <div>
      <Square value={squares[0]} onSquareClick={handleClick}  />
      <Square value={squares[1]} onSquareClick={handleClick}  />
      <Square value={squares[2]} onSquareClick={handleClick}  />
    </div>
    <div>
      <Square value={squares[3]} onSquareClick={handleClick}  />
      <Square value={squares[4]} onSquareClick={handleClick} />
      <Square value={squares[5]} onSquareClick={handleClick}  />
    </div>
    <div>
      <Square value={squares[6]} onSquareClick={handleClick}  />
      <Square value={squares[7]} onSquareClick={handleClick}  />
      <Square value={squares[8]} onSquareClick={handleClick}  />
    </div>
  </>
  );
}

export default board