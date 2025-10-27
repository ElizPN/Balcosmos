import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page with the logo', () => {
  render(<App />);
  const mainElements = screen.getAllByRole('main');
  expect(mainElements.length).toBeGreaterThan(0);
  expect(mainElements[0]).toBeInTheDocument();
});
