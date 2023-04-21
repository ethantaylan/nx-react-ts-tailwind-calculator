import React from 'react';
import { Keypad } from './keypad';

export const Calculator = () => {

  return (
    <div style={{ width: 350 }} className="h-full rounded-3xl bg-slate-500">
      <Keypad calculate={20 + 20} value={0} />
    </div>
  );
};
