import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('renders NotFound component', () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );
  const linkElement = screen.getByText(/Page not found!/i);
  expect(linkElement).toBeInTheDocument();
});
