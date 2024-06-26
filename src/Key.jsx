import React from 'react';

function Key({ keyValue, onClick }) {
  const handleClick = () => {
    onClick(keyValue);
  };

  const getKeyLabel = (key) => {
    if (key === 'Enter') return 'Enter';
    if (key === 'Backspace') return 'Backspace';
    if (key === 'Space') return 'Space';
    return key;
  };

  return (
    <button
      className={`px-4 py-3 m-1 border-2 rounded text-white bg-blue-900 ${
        keyValue === 'Enter' || keyValue === 'Backspace' || keyValue === 'Space'
          ? 'col-span-2'
          : ''
      }`}
      onClick={handleClick}
    >
      {getKeyLabel(keyValue)}
    </button>
  );
}

export default Key;
