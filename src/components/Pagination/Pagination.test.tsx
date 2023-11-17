// import { expect, it, describe, vi } from 'vitest';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import Pagination from './Pagination';
// import MainPage from '../../pages/MainPage/MainPage';
// import { BrowserRouter as Router } from 'react-router-dom';

// describe('Pagination', () => {
//   it('should render without crashing', () => {
//   const { getByText } = render(
//     <Pagination/>
//   );
//   expect(getByText('1')).toBeInTheDocument();
// });
// it('should call setPage with correct value when next page button is clicked', () => {
//   const setPage = vi.fn();
//   const { getByText } = render(
//     <Pagination/>
//   );
//   fireEvent.click(getByText('>'));
//   expect(setPage).toHaveBeenCalledWith(2);
// });
// it('should call setPage with correct value when previous page button is clicked', () => {
//   const setPage = vi.fn();
//   const { getByText } = render(
//     <Pagination />
//   );
//   fireEvent.click(getByText('<'));
//   expect(setPage).toHaveBeenCalledWith(1);
// });
// it('should disable next page button when on the last page', () => {
//   const setPage = vi.fn();
//   const { getByText } = render(
//     <Pagination />
//   );
//   expect(getByText('>')).toBeDisabled();
// });
// it('should disable previous page button when on the first page', () => {
//   const setPage = vi.fn();
//   const { getByText } = render(
//     <Pagination  />
//   );
//   expect(getByText('<')).toBeDisabled();
// });
// test('updates URL search param on page change', async () => {
//   const { getByText } = render(
//     <Router>
//       <MainPage />
//     </Router>
//   );
//   expect(window.location.search).toBe('?search=&limit=5&page=1');
//   const nextPageButton = getByText('>');
//   fireEvent.click(nextPageButton);
//   await waitFor(() => {
//     expect(window.location.search).toBe('?search=&limit=5&page=2');
//   });
//   });
// });
