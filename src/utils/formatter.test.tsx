import { currencyFormatter, monthFormatter } from './formatter';

describe('Utils', () => {
  it('monthFormatter', () => {
    const jan = monthFormatter(0);
    const dec = monthFormatter(11);

    expect(jan).toBe('January');
    expect(dec).toBe('December');
  });

  it('currencyFormatter', () => {
    const withDot = currencyFormatter('123456.78');
    const withComma = currencyFormatter('12,478');
    const withoutAny = currencyFormatter('12345678');

    expect(withDot).toBe('123,456.78');
    expect(withComma).toBe('12,478');
    expect(withoutAny).toBe('12,345,678');
  });
});
