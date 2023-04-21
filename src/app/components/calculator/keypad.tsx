interface KeypadProps {}

export interface KeysProps {
  key?: string;
  onClick?: () => void;
}

export const Keypad: React.FC<KeypadProps> = ({}) => {
  const keys: KeysProps[] = [
    { key: 'AC' },
    { key: 'DEL' },
    { key: '%' },
    { key: '÷' },

    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: 'X' },

    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '-' },

    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '+' },

    { key: '<>' },
    { key: '0' },
    { key: '.' },
    { key: '=' },
  ];

  console.log(keys);

  return (
    <div
      className="flex w-full items-center justify-center rounded-3xl rounded-t-none bg-slate-700 p-5"
      style={{ height: 300 }}
    >
      <div className="grid h-full w-full grid-cols-4 gap-2">
        {keys.map((key, index) => (
          <button key={index} className="rounded-full bg-slate-800">
            {key.key}
          </button>
        ))}
      </div>
    </div>
  );
};
