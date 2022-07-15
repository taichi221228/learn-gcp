import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello GCP', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello GCP/i);
  expect(linkElement).toBeInTheDocument();
});
