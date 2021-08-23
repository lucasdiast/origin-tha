import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  ReactChild,
  ReactElement,
  SetStateAction,
  MouseEventHandler,
} from 'react';

interface AuxProps {
  children: ReactChild;
}

interface PropsGoals {
  amount: string;
  month: number;
  year: number;
  targetYear: number;
  targetMonth: number;
  monthlySave: number;
  range: number;
  setAmount: Dispatch<SetStateAction<string>>;
  setTargetMonth: Dispatch<SetStateAction<number>>;
  setTargetYear: Dispatch<SetStateAction<number>>;
  setRange: Dispatch<SetStateAction<number>>;
  addMonth: MouseEventHandler<HTMLImageElement>;
  subtractMonth: MouseEventHandler<HTMLImageElement>;
}

const DEFAULT_PROPS = {
  amount: '',
  month: 0,
  year: 2021,
  targetYear: 2021,
  targetMonth: 0,
  monthlySave: 0,
  range: 1,
  setAmount: () => {},
  setTargetMonth: () => {},
  setTargetYear: () => {},
  setRange: () => {},
  addMonth: () => {},
  subtractMonth: () => {},
};

export const GoalContext = createContext<PropsGoals>(DEFAULT_PROPS);

export const GoalsProvider = ({ children }: AuxProps): ReactElement => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const [amount, setAmount] = useState('');
  const [targetMonth, setTargetMonth] = useState(month);
  const [targetYear, setTargetYear] = useState(year);
  const [range, setRange] = useState(1);
  const [monthlySave, setMonthlySave] = useState(0.0);

  const calcMonthlyAmount = () => {
    const cleanValue = amount.replace(',', '');
    const targetValue = parseFloat(cleanValue) / range;

    setMonthlySave(targetValue);
  };

  const addMonth = () => {
    if (targetMonth < 11) {
      setTargetMonth(targetMonth + 1);
    } else {
      setTargetYear(targetYear + 1);
      setTargetMonth(0);
    }
    setRange(range + 1);
  };

  const subtractMonth = () => {
    if (targetYear === year && targetMonth === month) return;

    if (targetMonth > 0) {
      setTargetMonth(targetMonth - 1);
    } else {
      setTargetYear(targetYear - 1);
      setTargetMonth(11);
    }
    setRange(range - 1);
  };

  useEffect(() => {
    calcMonthlyAmount();
  }, [amount, targetMonth]);

  return (
    <GoalContext.Provider
      value={{
        amount,
        setAmount,
        month,
        year,
        targetMonth,
        setTargetMonth,
        targetYear,
        setTargetYear,
        monthlySave,
        range,
        setRange,
        addMonth,
        subtractMonth,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export const useGoals = (): PropsGoals => useContext(GoalContext);
