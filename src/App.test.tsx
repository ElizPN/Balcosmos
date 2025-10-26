import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page with the logo', () => {
  render(<App />);
  const logoElements = screen.getAllByAltText(/LogoBalcosmos/i);
  expect(logoElements.length).toBeGreaterThan(0);
  expect(logoElements[0]).toBeInTheDocument();
});
