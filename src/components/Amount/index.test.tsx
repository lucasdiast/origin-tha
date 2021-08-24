import { shallow } from 'enzyme';
import Amount from './index';

describe('Amount', () => {
  it('returns the text', () => {
    const component = shallow(<Amount />);

    expect(component.find('[data-testid="message"]').text()).toBe(
      'Total amount'
    );
  });
});
