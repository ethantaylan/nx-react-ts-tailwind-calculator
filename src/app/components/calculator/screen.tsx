import React from 'react';
import { menuIcon } from 'src/app/icons/icons';

export const Screen = () => {
  return (
    <React.Fragment>
      <div className="w-100 flex items-center justify-between p-4">
        <h1 className="font-semibold text-slate-300">Calculator</h1>
        {menuIcon('w-5')}
      </div>
      <div className="mt-10 flex h-full flex-col items-end justify-end p-4">
        <h1 className="text-xl text-slate-300">10 + 10</h1>
        <h1 className="text-4xl">20</h1>
      </div>
    </React.Fragment>
  );
};
