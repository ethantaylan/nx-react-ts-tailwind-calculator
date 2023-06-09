import React from 'react';
import { menuIcon } from 'src/app/icons/icons';

interface ScreenProps {
  equal: any;
  firstValue: number | undefined
  secondValue: number | undefined
  operator?: any;
}

export const Screen: React.FC<ScreenProps> = ({
  equal,
  firstValue,
  secondValue,
  operator,
}) => {
  return (
    <React.Fragment>
      <div className="w-100 flex items-center justify-between p-4">
        <h1 className="font-semibold text-slate-300">Calculator</h1>
        {menuIcon('w-5')}
      </div>
      <div className="mt-10 flex h-full flex-col items-end justify-end p-4">
        <h1 className="text-xl text-slate-300">
          <span>{firstValue}</span>
          <span className='mx-2'>{operator}</span>
          <span>{secondValue}</span>
        </h1>
        <h1 className="text-4xl">{equal}</h1>
      </div>
    </React.Fragment>
  );
};
