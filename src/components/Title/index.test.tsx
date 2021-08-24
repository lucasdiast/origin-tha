import { shallow } from 'enzyme';
import Title from './index';

describe('Title', () => {
  it('renders correctly', () => {
    const component = shallow(<Title>Some text</Title>);

    expect(component).toMatchSnapshot();
  });
});
