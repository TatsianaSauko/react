import { expect, it, describe, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import { MemoryRouter } from 'react-router-dom';

describe('Pagination', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Pagination page={1} lastVisiblePage={5} setPage={() => {}} />
      </MemoryRouter>
    );
    expect(getByText('1')).toBeInTheDocument();
  });

  it('should call setPage with correct value when next page button is clicked', () => {
    const setPage = vi.fn();
    const { getByText } = render(
      <Pagination page={1} lastVisiblePage={5} setPage={setPage} />
    );
    fireEvent.click(getByText('>'));
    expect(setPage).toHaveBeenCalledWith(2);
    // const searchParams = new URLSearchParams(location.search);
    // const page = searchParams.get('page');
    // expect(page).toBe(2);
  });

  it('should call setPage with correct value when previous page button is clicked', () => {
    const setPage = vi.fn();
    const { getByText } = render(
      <Pagination page={2} lastVisiblePage={5} setPage={setPage} />
    );
    fireEvent.click(getByText('<'));
    expect(setPage).toHaveBeenCalledWith(1);
  });

  it('should disable next page button when on the last page', () => {
    const setPage = vi.fn();
    const { getByText } = render(
      <Pagination page={5} lastVisiblePage={5} setPage={setPage} />
    );
    expect(getByText('>')).toBeDisabled();
  });

  it('should disable previous page button when on the first page', () => {
    const setPage = vi.fn();
    const { getByText } = render(
      <Pagination page={1} lastVisiblePage={5} setPage={setPage} />
    );
    expect(getByText('<')).toBeDisabled();
  });
});
