/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useGoals } from '../../providers/goals/goals';

function useGoalsHooks() {
  const {
    amount,
    month,
    year,
    targetMonth,
    setTargetMonth,
    targetYear,
    setTargetYear,
    range,
    setRange,
    setMonthlySave,
  } = useGoals();

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

  const calcMonthlyAmount = useCallback(() => {
    const cleanValue = parseFloat(amount.replace(/,/g, ''));
    const targetValue = parseFloat((cleanValue / range).toFixed(2));

    setMonthlySave(targetValue);
  }, [amount, range]);

  return { addMonth, subtractMonth, calcMonthlyAmount };
}

export default useGoalsHooks;
