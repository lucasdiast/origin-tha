import { shallow } from 'enzyme';
import CardWrapper from './index';

describe('CardWrapper', () => {
  it('renders correctly', () => {
    const component = shallow(<CardWrapper>Text</CardWrapper>);

    expect(component).toMatchSnapshot();
  });
});
