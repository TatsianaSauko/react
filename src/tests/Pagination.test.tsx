import { render, fireEvent, waitFor } from '@testing-library/react';
import Pagination from '../components/Pagination';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test('renders pagination component', () => {
  const { getByText } = render(
    <Pagination page={1} lastVisiblePage={5} setPage={() => {}} />
  );
  expect(getByText('<<')).toBe;
  expect(getByText('<')).toBeInTheDocument();
  expect(getByText('>')).toBeInTheDocument();
  expect(getByText('>>')).toBeInTheDocument();
  expect(getByText('1')).toBeInTheDocument();
});

test('calls setPage when button is clicked', async () => {
  const setPage = jest.fn();
  const { getByText } = render(
    <Pagination page={1} lastVisiblePage={5} setPage={setPage} />
  );
  getByText('>').click();
  expect(setPage).toHaveBeenCalled();
});

test('disables buttons when on first', () => {
  const setPage = jest.fn();
  const { getByText } = render(
    <Pagination page={1} lastVisiblePage={5} setPage={setPage} />
  );
  expect(getByText('<<')).toBeDisabled();
  expect(getByText('<')).toBeDisabled();
});

test('disables buttons when on last page', () => {
  const setPage = jest.fn();
  const { getByText: getByTextLast } = render(
    <Pagination page={5} lastVisiblePage={5} setPage={setPage} />
  );
  expect(getByTextLast('>>')).toBeDisabled();
  expect(getByTextLast('>')).toBeDisabled();
});

test('renders correct page number', () => {
  const setPage = jest.fn();
  const { getByText } = render(
    <Pagination page={3} lastVisiblePage={5} setPage={setPage} />
  );
  expect(getByText('3')).toBeInTheDocument();
});

test('disables next buttons when on lastVisiblePage', () => {
  const setPage = jest.fn();
  const { getByText } = render(
    <Pagination page={5} lastVisiblePage={5} setPage={setPage} />
  );
  expect(getByText('>>')).toBeDisabled();
  expect(getByText('>')).toBeDisabled();
});

test('calls setPage with correct arguments', () => {
  const setPage = jest.fn();
  const { getByText } = render(
    <Pagination page={3} lastVisiblePage={5} setPage={setPage} />
  );
  fireEvent.click(getByText('>'));
  expect(setPage).toHaveBeenCalledWith(4);
  fireEvent.click(getByText('>>'));
  expect(setPage).toHaveBeenCalledWith(5);
  fireEvent.click(getByText('<'));
  expect(setPage).toHaveBeenCalledWith(2);
  fireEvent.click(getByText('<<'));
  expect(setPage).toHaveBeenCalledWith(1);
});

test('enables and disables buttons correctly when page changes', () => {
  const setPage = jest.fn();
  const { getByText, rerender } = render(
    <Pagination page={1} lastVisiblePage={5} setPage={setPage} />
  );
  expect(getByText('<<')).toBeDisabled();
  expect(getByText('<')).toBeDisabled();
  rerender(<Pagination page={3} lastVisiblePage={5} setPage={setPage} />);
  expect(getByText('<<')).not.toBeDisabled();
  expect(getByText('<')).not.toBeDisabled();
  expect(getByText('>>')).not.toBeDisabled();
  expect(getByText('>')).not.toBeDisabled();
  rerender(<Pagination page={5} lastVisiblePage={5} setPage={setPage} />);
  expect(getByText('>>')).toBeDisabled();
  expect(getByText('>')).toBeDisabled();
});

test('calls router.push with correct arguments when setPage is called', async () => {
  const router = useRouter();
  const { getByText } = render(
    <Pagination
      page={1}
      lastVisiblePage={5}
      setPage={(newPage) => router.push(`/?search=&limit=&page=${newPage}`)}
    />
  );

  fireEvent.click(getByText('>'));

  await waitFor(() => {
    expect(router.push).toHaveBeenCalledWith('/?search=&limit=&page=2');
  });
});

test('calls router.push with correct arguments when setPage is called', async () => {
  const setPage = jest.fn();
  const { getByText, rerender } = render(
    <Pagination page={5} lastVisiblePage={5} setPage={setPage} />
  );

  fireEvent.click(getByText('<<'));
  expect(setPage).toHaveBeenCalledWith(1);

  rerender(<Pagination page={1} lastVisiblePage={5} setPage={setPage} />);

  await waitFor(() => {
    expect(getByText('1')).toBeInTheDocument();
  });
});
