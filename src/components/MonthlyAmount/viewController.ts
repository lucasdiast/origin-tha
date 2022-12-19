import { useEffect } from 'react';
import { useGoals } from '../../providers/goals/goals';
import useGoalsHooks from '../../hooks/providers/goals';

function useViewController() {
  const { amount, range, targetMonth, targetYear, monthlySave } = useGoals();
  const { calcMonthlyAmount } = useGoalsHooks();

  useEffect(() => {
    calcMonthlyAmount();
  }, [amount, range, calcMonthlyAmount]);

  return { amount, range, targetMonth, targetYear, monthlySave };
}

export default useViewController;
