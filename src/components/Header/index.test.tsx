import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {
  it('renders correctly', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
