import React, { useState } from 'react';
import './style.css';

export const App = () => {
  const [input, setInput] = useState('');

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="basic-calculator-container">
      <div className="calculator-body">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            className="calculator-input"
            readOnly
          />
        </div>
        <div className="calculator-buttons">
          {[
            '1',
            '2',
            '3',
            '+',
            '4',
            '5',
            '6',
            '-',
            '7',
            '8',
            '9',
            '*',
            '0',
            'C',
            '=',
            '/',
          ].map((val) => (
            <button
              onClick={
                val === 'C' ? clearInput : val === '=' ? calculate : handleInput
              }
              value={val}
              className={`calculator-button ${
                val === 'C'
                  ? 'red-button'
                  : val === '='
                  ? 'green-button'
                  : 'blue-button'
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
