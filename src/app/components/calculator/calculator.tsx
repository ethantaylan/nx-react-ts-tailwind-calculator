import { Keypad } from './keypad';
import { Screen } from './screen';

export const Calculator = () => {
  return (
    <div style={{ width: 350 }} className="h-full rounded-3xl bg-slate-500">
      <Screen />
      <Keypad />
    </div>
  );
};
