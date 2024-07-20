import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jammmer title', () => {
  render(<App />);
  const linkElement = screen.getByText(/mmm/i);
  expect(linkElement).toBeInTheDocument();
});
