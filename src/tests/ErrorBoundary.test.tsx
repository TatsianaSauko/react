import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

const MockComponent = () => {
  throw new Error('Test error');
};

test('renders ErrorBoundary and catches errors', () => {
  const consoleSpy = jest.spyOn(console, 'error');
  consoleSpy.mockImplementation(() => {});

  render(
    <ErrorBoundary>
      <MockComponent />
    </ErrorBoundary>
  );

  expect(screen.getByText('Sorry.. there was an error')).toBeInTheDocument();

  consoleSpy.mockRestore();
});
