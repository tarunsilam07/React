import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [showModal, setShowModal] = useState(true); 
  const [showWinnerModal, setShowWinnerModal] = useState(false); 

  const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return { winner: state[a], winningSquares: [a, b, c] };
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (!state[index] && !isWinner) {
      const copyState = [...state];
      copyState[index] = isXTurn ? 'X' : 'O';
      setState(copyState);
      setIsXTurn(!isXTurn);
    }
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setShowWinnerModal(false);
    setShowModal(true); 
  };

  if (isWinner && !showWinnerModal) {
    setShowWinnerModal(true); 
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 p-8">
      {isWinner ? (
        <>
          {showWinnerModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="bg-white p-8 rounded-lg text-center shadow-lg animate-fade-in-down transform transition-all duration-300">
                <h2 className="text-3xl font-bold text-green-600 mb-4">{isWinner.winner} Wins!</h2>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110 duration-300"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h4 className="text-white text-2xl font-semibold mb-6">
            Player {isXTurn ? 'X' : 'O'}'s Turn
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {state.map((value, index) => (
              <Square
                key={index}
                onClick={() => handleClick(index)}
                value={value}
                isWinningSquare={isWinner?.winningSquares?.includes(index)}
              />
            ))}
          </div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg text-center shadow-lg animate-fade-in-down transform transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Tic-Tac-Toe!</h2>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-110"
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Board;
