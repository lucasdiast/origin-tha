import { shallow, mount } from 'enzyme';
import Amount from './index';

describe('Amount', () => {
  it('check the text', () => {
    const component = shallow(<Amount />);

    expect(component.find('[data-testid="message"]').text()).toBe(
      'Total amount'
    );
  });

  it('renders correctly', () => {
    const component = shallow(<Amount />);

    expect(component).toMatchSnapshot();
  });
});
