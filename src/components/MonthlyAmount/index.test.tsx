import { shallow } from 'enzyme';
import MonthlyAmount from './index';

describe('MonthlyAmount', () => {
  it('renders correctly', () => {
    const component = shallow(<MonthlyAmount />);

    expect(component).toMatchSnapshot();
  });
});
