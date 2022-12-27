import { shallow } from 'enzyme';
import MediumButton from './index';

describe('MediumButton', () => {
  it('renders correctly', () => {
    const component = shallow(<MediumButton>Text</MediumButton>);

    expect(component).toMatchSnapshot();
  });
});
