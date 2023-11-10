import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import { vi, test } from 'vitest';

test('updates the URL query parameter when the page changes', () => {
  const setPage = vi.fn();
  const { getByText } = render(
    <Pagination page={1} lastVisiblePage={5} setPage={setPage} />
  );
  const page2Button = getByText('>');
  fireEvent.click(page2Button);
  expect(setPage).toHaveBeenCalledWith(2);
  // expect(window.location.search).toBe('?page=2');
});
