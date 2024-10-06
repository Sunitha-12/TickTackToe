import React, { useState } from 'react';

const TicTacToe = () => {
  const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const click = (index) => {
    if (winner || table[index] !== "") return;
    const newTable = [...table];
    newTable[index] = player;
    setTable(newTable);
    checkWinner(newTable);
    setPlayer(player === "O" ? "X" : "O");
  };

  const checkWinner = (newTable) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (newTable[a] && newTable[a] === newTable[b] && newTable[a] === newTable[c]) {
        setWinner(newTable[a]);
        break;
      }
    }
  };

  const reset = () => {
    setTable(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {winner && (
        <h2>Player {winner} wins!</h2>
      )}
      <table border={1} cellPadding={50}>
        <tr>
          <td onClick={() => click(0)}>{table[0]}</td>
          <td onClick={() => click(1)}>{table[1]}</td>
          <td onClick={() => click(2)}>{table[2]}</td>
        </tr>
        <tr>
          <td onClick={() => click(3)}>{table[3]}</td>
          <td onClick={() => click(4)}>{table[4]}</td>
          <td onClick={() => click(5)}>{table[5]}</td>
        </tr>
        <tr>
          <td onClick={() => click(6)}>{table[6]}</td>
          <td onClick={() => click(7)}>{table[7]}</td>
          <td onClick={() => click(8)}>{table[8]}</td>
        </tr>
      </table>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
