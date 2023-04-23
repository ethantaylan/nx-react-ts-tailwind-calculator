import React from 'react';
import { keys, transition } from '../keys';
import { Screen } from './screen';

interface KeypadProps {
  value: number;
  calculate: number;
}

export const Keypad: React.FC<KeypadProps> = () => {
  const [arrayOfFirstValue, setArrayOfFirstValue] = React.useState<any>([]);
  const [arrayOfSecondValue, setArrayOfSecondValue] = React.useState<any>([]);
  const [equal, setEqual] = React.useState<number>();
  const [operator, setOperator] = React.useState<string>();
  const [toSecondValue, setToSecondValue] = React.useState<boolean>();
  const [showEqual, setShowEqual] = React.useState<boolean | undefined>(false);
  const [decimal, setDecimal] = React.useState<boolean>(false);

  const handleValues = (key: number | undefined | string) => {
    if (key === '.') {
      if (!decimal) {
        setArrayOfFirstValue([...arrayOfFirstValue, key]);
        setDecimal(true);
      }
    } else {
      if (!toSecondValue) {
        setArrayOfFirstValue([...arrayOfFirstValue, key]);
      } else {
        setArrayOfSecondValue([...arrayOfSecondValue, key]);
      }
    }
  };

  console.log(arrayOfFirstValue);

  const firstValue = parseFloat(arrayOfFirstValue.join(''));
  const secondValue = parseFloat(arrayOfSecondValue.join(''));

  React.useEffect(() => {
    if(showEqual) {
      setDecimal(false)
      setToSecondValue(false)
    }
  }, [showEqual])

  React.useEffect(() => {
    switch (operator) {
      case '+':
        setEqual(firstValue + secondValue);
        setOperator('+');
        setToSecondValue(true);
        break;
      case '-':
        setEqual(firstValue - secondValue);
        setOperator('-');
        setToSecondValue(true);
        break;
      case '*':
        setEqual(firstValue * secondValue);
        setOperator('*');
        setToSecondValue(true);

        break;
      case '/':
        setEqual(firstValue / secondValue);
        setOperator('/');
        setToSecondValue(true);
        break;
      default:
        setEqual(undefined);
    }
  }, [firstValue, secondValue, operator, arrayOfFirstValue.length]);

  return (
    <React.Fragment>
      <Screen
        equal={showEqual && equal}
        firstValue={firstValue}
        operator={operator}
        secondValue={secondValue}
      />
      <div
        className="flex w-full items-center justify-center rounded-3xl rounded-t-none bg-slate-700 p-5"
        style={{ height: 300 }}
      >
        <div className="grid h-full w-full grid-cols-4 gap-2">
          {keys.map((key, index) => (
            <button
              onClick={() => {
                setShowEqual(key.isEqual);
                if (!operator) {
                  setOperator(key.operator);
                }
                handleValues(key.keyValue || key.comma);
              }}
              key={index}
              className={`rounded-full text-lg font-semibold hover:bg-slate-900 ${key.custom} ${transition}`}
            >
              {key.key}
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
