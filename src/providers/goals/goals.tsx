import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
} from 'react';
import { PropsGoals, AuxProps } from './interfaces';

const DEFAULT_PROPS = {
  amount: '',
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  targetYear: 0,
  targetMonth: 0,
  monthlySave: 0,
  range: 1,
  setAmount: () => {},
  setTargetMonth: () => {},
  setTargetYear: () => {},
  setMonthlySave: () => {},
  setRange: () => {},
};

export const GoalContext = createContext<PropsGoals>(DEFAULT_PROPS);

export const GoalsProvider = ({ children }: AuxProps): ReactElement => {
  const now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();

  if (month === 11) {
    month = 0;
    year += 1;
  }

  const [range, setRange] = useState(1);
  const [amount, setAmount] = useState('0');
  const [targetMonth, setTargetMonth] = useState(month);
  const [targetYear, setTargetYear] = useState(year);
  const [monthlySave, setMonthlySave] = useState(0);

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
        setMonthlySave,
        range,
        setRange,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export const useGoals = (): PropsGoals => useContext(GoalContext);
