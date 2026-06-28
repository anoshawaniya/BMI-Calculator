import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders height input in feet', () => {
  render(<App />);
  expect(screen.getByText(/height \(ft\)/i)).toBeInTheDocument();
});

test('shows a healthy result for a normal BMI', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/weight \(kg\)/i), {
    target: { value: '70' },
  });
  fireEvent.change(screen.getByLabelText(/height \(ft\)/i), {
    target: { value: '5.8' },
  });
  fireEvent.click(screen.getByRole('button', { name: /calculate bmi/i }));

  expect(screen.getByText(/you are a healthy weight/i)).toBeInTheDocument();
});

test('shows an underweight result for a low BMI', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/weight \(kg\)/i), {
    target: { value: '50' },
  });
  fireEvent.change(screen.getByLabelText(/height \(ft\)/i), {
    target: { value: '5.8' },
  });
  fireEvent.click(screen.getByRole('button', { name: /calculate bmi/i }));

  expect(screen.getByText(/you are underweight/i)).toBeInTheDocument();
});

test('shows an overweight result for a high BMI', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/weight \(kg\)/i), {
    target: { value: '90' },
  });
  fireEvent.change(screen.getByLabelText(/height \(ft\)/i), {
    target: { value: '5.8' },
  });
  fireEvent.click(screen.getByRole('button', { name: /calculate bmi/i }));

  expect(screen.getByText(/you are overweight/i)).toBeInTheDocument();
});

test('shows a diet plan after calculating BMI', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/weight \(kg\)/i), {
    target: { value: '70' },
  });
  fireEvent.change(screen.getByLabelText(/height \(ft\)/i), {
    target: { value: '5.8' },
  });
  fireEvent.click(screen.getByRole('button', { name: /calculate bmi/i }));

  expect(screen.getByText(/maintain balance with vegetables/i)).toBeInTheDocument();
});
