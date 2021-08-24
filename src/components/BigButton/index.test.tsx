import { shallow } from 'enzyme';
import BigButton from './index';

describe('BigButton', () => {
  it('renders correctly', () => {
    const component = shallow(<BigButton>Text</BigButton>);

    expect(component).toMatchSnapshot();
  });
});
