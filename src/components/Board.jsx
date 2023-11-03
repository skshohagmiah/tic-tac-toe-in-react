/* eslint-disable react/prop-types */
import Square from "./Square"

const Board = ({currentBoard,handleClick, reset, status}) => {
  return (
    <>
    <h1 className="status">{status}</h1>
    <div className="board">
        <Square value={currentBoard[0]} onclick={() => handleClick(0)}/>
        <Square value={currentBoard[1]} onclick={() => handleClick(1)}/>
        <Square value={currentBoard[2]} onclick={() => handleClick(2)}/>
        <Square value={currentBoard[3]} onclick={() => handleClick(3)}/>
        <Square value={currentBoard[4]} onclick={() => handleClick(4)}/>
        <Square value={currentBoard[5]} onclick={() => handleClick(5)}/>
        <Square value={currentBoard[6]} onclick={() => handleClick(6)}/>
        <Square value={currentBoard[7]} onclick={() => handleClick(7)}/>
        <Square value={currentBoard[8]} onclick={() => handleClick(8)}/>
    </div>
    <button onClick={reset}>Reset Game</button>

    </>
  )
}

export default Board