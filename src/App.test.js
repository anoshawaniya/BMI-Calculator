import { render, screen } from '@testing-library/react';
import App from './App';

test('renders height input in feet', () => {
  render(<App />);
  expect(screen.getByText(/height \(ft\)/i)).toBeInTheDocument();
});
