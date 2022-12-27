import { useGoals } from '../../providers/goals/goals';

function useViewController() {
  const { amount, range, targetMonth, targetYear } = useGoals();

  function saveMonthAndYear() {
    localStorage.setItem('targetMonth', targetMonth.toString());
    localStorage.setItem('targetYear', targetYear.toString());
    localStorage.setItem('range', range.toString());
    localStorage.setItem('amount', amount);
  }

  return { saveMonthAndYear };
}

export default useViewController;
