import { render, screen } from '@testing-library/react';
import App from './App';

test('renders city input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter any city name/i);
  expect(inputElement).toBeInTheDocument();
});
