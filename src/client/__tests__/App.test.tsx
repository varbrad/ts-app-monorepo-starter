import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', (): void => {
  it('should render without crashing', (): void => {
    render(<App />);
  });

  it('should match the snapshot', (): void => {
    const { getByText } = render(<App />);
    expect(getByText('Hello, world!')).toMatchInlineSnapshot(`
      <p>
        Hello, world!
      </p>
    `);
  });
});
