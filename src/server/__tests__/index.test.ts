import fn from '../index';

describe('thing', (): void => {
  it('does thing', (): void => {
    expect(typeof document).toMatchInlineSnapshot(`"undefined"`);
  });

  it('does another thing', (): void => {
    expect(fn(5)).toMatchInlineSnapshot(`3125`);
  });
});
