import { expect, it, describe, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import SelectLimit from './SelectLimit';
import { renderWithProviders } from '../../utils/test-utils';

describe('SelectLimit', () => {
  it('should render without crashing', () => {
    const { getByText } = renderWithProviders(<SelectLimit />);
    expect(getByText('5')).toBeInTheDocument();
  });
  it('should call changeLimit with the correct value when an option is selected', () => {
    const mockChangeLimit = vi.fn();
    vi.mock('../../hooks/redux', () => ({
      useActions: () => ({ changeLimit: mockChangeLimit }),
      useAppSelector: () => ({ limit: 5 }),
    }));
    const { getByRole } = renderWithProviders(<SelectLimit />);
    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: '10' } });
    vi.waitFor(() => {
      expect(mockChangeLimit).toHaveBeenCalledTimes(1);
      expect(mockChangeLimit).toHaveBeenCalledWith(10);
    });
  });
});
