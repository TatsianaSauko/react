import { expect, it, describe } from 'vitest';
import { fireEvent, waitFor } from '@testing-library/react';
import Pagination from './Pagination';

import { renderWithProviders } from '../../utils/test-utils';

import MainPage from '../../pages/MainPage/MainPage';

describe('Pagination', () => {
  it('should render without crashing', () => {
    const { getByText } = renderWithProviders(<Pagination />);
    expect(getByText('1')).toBeInTheDocument();
  });
  test('updates URL search param on page change', async () => {
    const { getByText } = renderWithProviders(<MainPage />);
    expect(window.location.search).toBe('?page=1');
    const nextPageButton = getByText('>');
    fireEvent.click(nextPageButton);
    await waitFor(() => {
      expect(window.location.search).toBe('?page=2');
    });
  });
});
