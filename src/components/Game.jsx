/* eslint-disable no-unused-vars */
import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentBoard = history[history.length - 1];
    const [xIsNext, setXisNext] = useState(true);


    function handleClick(i){
        if(currentBoard[i] || calculateWinner(history[history.length - 1])){
            return;
        }

        const newCurrentBoard = currentBoard.slice();
        if(xIsNext){
            newCurrentBoard[i] = 'x';
        }else{
            newCurrentBoard[i] = 'o';
        }
    
        const newHistory = [...history, newCurrentBoard]
        setHistory(newHistory);
        setXisNext(!xIsNext);
    }


    function resetGame(){
        setHistory([Array(9).fill(null)])
    }

    let winner = calculateWinner(history[history.length - 1]);
    let status;
    if(winner){
        status = `Winner is ${winner}`;
    }else{
        status = `next player is ${xIsNext ? 'x' : '0'}`
    }



    function jumpTo(i){
        const newHistory = [...history.slice(0,i + 1)];
        setHistory(newHistory);

    }


    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 1; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

  return (
    <div className="game">
        <div className="game-board">
            <Board currentBoard={currentBoard} reset={resetGame} status={status} handleClick={handleClick}/>
        </div>
        <div className="game-info">
            <ol>
                {
                 history.slice(1).map((item, index) => 
                    <button key={Math.random() * 1000} onClick={() => jumpTo(index)}>go to move {index}</button>
                    
                    )}
            </ol>
        </div>
    </div>
  )
}

export default Game