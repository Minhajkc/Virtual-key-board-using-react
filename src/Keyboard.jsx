import React, { useState } from 'react';
import Key from './Key';

function Keyboard() {
  const [pressedKey, setPressedKey] = useState([]);

  const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace',
    'Space'
  ];

  const handleKeyPress = (keyValue) => {
    if (keyValue === 'Backspace') {
      setPressedKey(pressedKey.slice(0, -1));
    } else if (keyValue === 'Enter') {
      setPressedKey([...pressedKey, '\n']);
    } else if (keyValue === 'Space') {
      setPressedKey([...pressedKey, ' ']);
    } else {
      setPressedKey([...pressedKey, keyValue]);
    }
  };

  return (
    <div className="keyboard-container flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">VIRTUAL KEYBOARD</h1>
      <div className='border-2 p-5 rounded-2xl'>
        <div className="text-center bg-gray-300 rounded-lg p-5 grid grid-cols-10 gap-2 mb-4">
          {keys.map((key) => (
            <Key key={key} keyValue={key} onClick={handleKeyPress} />
          ))}
        </div>
        {pressedKey.length > 0 && (
          <div className="p-2 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-medium whitespace-pre-line">{pressedKey.join('')}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Keyboard;
