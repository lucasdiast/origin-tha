import { KeyboardEvent } from 'react';
import { useGoals } from '../../providers/goals/goals';
import goalsHooks from '../../hooks/providers/goals';

function useViewController() {
  const { targetMonth, targetYear } = useGoals();
  const { addMonth, subtractMonth } = goalsHooks();

  const keyPress = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowRight') {
      addMonth();
    }
    if (e.key === 'ArrowLeft') {
      subtractMonth();
    }
  };

  return {
    keyPress,
    addMonth,
    subtractMonth,
    targetMonth,
    targetYear,
  };
}

export default useViewController;
