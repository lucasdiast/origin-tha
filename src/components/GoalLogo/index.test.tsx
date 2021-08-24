import { shallow } from 'enzyme';
import GoalLogo from './index';
import logo from '../../assets/icons/logo.svg';

describe('GoalLogo', () => {
  it('renders correctly', () => {
    const component = shallow(
      <GoalLogo goal={'Text that should appear'} logo={logo} />
    );

    expect(component).toMatchSnapshot();
  });
});
