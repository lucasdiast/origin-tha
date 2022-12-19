import { useGoals } from '../../providers/goals/goals';
import { currencyFormatter } from '../../utils/formatter';

function useViewController() {
  const { amount, setAmount } = useGoals();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value ? setAmount(currencyFormatter(value)) : setAmount('0');
  };

  return { handleChange, setAmount, amount };
}

export default useViewController;
