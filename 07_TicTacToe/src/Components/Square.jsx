import React from 'react';

function Square({ value, onClick, isWinningSquare }) {
  return (
    <div
      onClick={onClick}
      className={`w-24 h-24 flex justify-center items-center border-4 border-gray-400 cursor-pointer transition-transform duration-300 transform hover:scale-110 ${
        value ? 'bg-gray-100 text-black' : 'bg-gray-200'
      } ${isWinningSquare ? 'bg-yellow-300 shadow-lg animate-pulse' : ''}`}
      style={{ borderRadius: '8px' }}
    >
      <span className="text-3xl font-extrabold">{value}</span>
    </div>
  );
}

export default Square;
