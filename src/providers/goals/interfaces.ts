import { Dispatch, ReactChild, SetStateAction } from 'react';

export interface PropsGoals {
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
  setMonthlySave: Dispatch<SetStateAction<number>>;
}

export interface AuxProps {
  children: ReactChild;
}
