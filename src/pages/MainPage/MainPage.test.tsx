import { expect, test, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MainPage from './MainPage';
import { BrowserRouter as Router } from 'react-router-dom';

test('saves input value to local storage on handleAdd', async () => {
  const { getByText, getByPlaceholderText } = render(
    <Router>
      <MainPage />
    </Router>
  );
  const input = getByPlaceholderText('Enter a name...');
  const button = getByText('Search');

  Storage.prototype.setItem = vi.fn();

  fireEvent.change(input, { target: { value: 'Test value' } });
  fireEvent.click(button);

  expect(localStorage.setItem).toHaveBeenCalledWith('state', 'Test value');
});

test('retrieves value from local storage on mount', async () => {
  render(
    <Router>
      <MainPage />
    </Router>
  );
  Storage.prototype.getItem = vi.fn(() => 'Test value');
  await waitFor(() => {
    expect(localStorage.getItem).toHaveBeenCalledWith('state');
  });
});
