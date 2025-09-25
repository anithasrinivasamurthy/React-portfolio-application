import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Todo List heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Todo List !!/i);
  expect(headingElement).toBeInTheDocument();
});
