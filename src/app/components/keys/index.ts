export const transition = 'transition ease-in-out hover:scale-110';
export const customKey = `bg-slate-300 text-black hover:bg-slate-300 ${transition}`;
export const equal = `bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-300 transition duration-150 ease-out hover:ease-in ${transition}`;

export interface KeysProps {
  key?: string;
  onClick?: () => void;
  custom?: string;
  keyValue?: number;
  isValue: boolean;
}

export const keys: KeysProps[] = [
  { key: 'AC', isValue: false },
  { key: 'DEL', isValue: false },
  { key: '%', isValue: false },
  { key: '÷', custom: customKey, isValue: false },

  { key: '7', isValue: true, keyValue: 7 },
  { key: '8', isValue: true, keyValue: 8 },
  { key: '9', isValue: true, keyValue: 9 },
  { key: 'X', custom: customKey, isValue: false },

  { key: '4', isValue: true, keyValue: 4 },
  { key: '5', isValue: true, keyValue: 5 },
  { key: '6', isValue: true, keyValue: 6 },
  { key: '-', custom: customKey, isValue: false },

  { key: '1', isValue: true, keyValue: 1 },
  { key: '2', isValue: true, keyValue: 2 },
  { key: '3', isValue: true, keyValue: 4 },
  { key: '+', custom: customKey, isValue: false },

  { key: '<>', isValue: false },
  { key: '0', isValue: true, keyValue: 0 },
  { key: '.', isValue: false },
  { key: '=', custom: equal, isValue: false },
];
