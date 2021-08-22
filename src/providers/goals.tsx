import React, { useState, ReactElement } from 'react';

interface AuxProps {
  children: ReactElement;
}

export const GoalContext = React.createContext({});

export const GoalsProvider = ({ children }: AuxProps): ReactElement => {
  const [goals, setGoals] = useState([]);
  const [amount, setAmount] = useState(0.0);
  const [month, setMonth] = useState(0.0);
  const [year, setYear] = useState();

  // useEffect(() => {}, []);

  // const calcMonthlyAmount = () => {};

  return (
    <GoalContext.Provider
      value={{
        goals,
        amount,
        month,
        year,
        setGoals,
        setAmount,
        setMonth,
        setYear,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export const useGoals = () => React.useContext(GoalContext);
