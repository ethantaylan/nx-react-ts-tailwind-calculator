import { playIcon } from '../icons/icons';
import { Calculator } from './calculator/calculator';

export const Playground = () => {
  return (
    <div className="h-full bg-slate-600 p-4 text-white">
      <div className="flex items-center md:container">
        <h1 className="text-lg">playground</h1>
        {playIcon('h-5 ml-1')}
      </div>
      <div className="flex w-full mt-20 justify-center">
        <Calculator />
      </div>
    </div>
  );
};
