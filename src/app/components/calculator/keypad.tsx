import React from 'react';
import { keys, transition } from '../keys';
import { Screen } from './screen';

interface KeypadProps {
  value: number;
  calculate: number;
}

export const Keypad: React.FC<KeypadProps> = () => {
  const handleKeysFirstValue = (key: number | undefined) => {
    console.log(key);
  };

  const firstValue = 12;
  const secondValue = 2;

  return (
    <React.Fragment>
      <Screen
        equal={firstValue + secondValue}
        firstValue={firstValue}
        operation={'+'}
        secondValue={secondValue}
      />
      <div
        className="flex w-full items-center justify-center rounded-3xl rounded-t-none bg-slate-700 p-5"
        style={{ height: 300 }}
      >
        <div className="grid h-full w-full grid-cols-4 gap-2">
          {keys.map((key, index) => (
            <button
              onClick={() => handleKeysFirstValue(key.keyValue)}
              key={index}
              className={`rounded-full bg-slate-800 text-lg font-semibold hover:bg-slate-900 ${key.custom} ${transition}`}
            >
              {key.key}
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
