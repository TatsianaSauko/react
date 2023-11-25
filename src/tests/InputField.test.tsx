import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('renders InputField and submits form', () => {
  const mockRouter = {
    push: jest.fn(),
    query: { search: '' },
  };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const { getByPlaceholderText, getByText } = render(<InputField />);

  fireEvent.change(getByPlaceholderText('Enter a name...'), {
    target: { value: 'Test Search' },
  });
  fireEvent.click(getByText('Search'));

  expect(mockRouter.push).toHaveBeenCalledWith('/?search=Test Search');
});

test('updates search query when text is entered', () => {
  render(<InputField />);
  const inputField = screen.getByPlaceholderText(
    'Enter a name...'
  ) as HTMLInputElement;
  fireEvent.change(inputField, { target: { value: 'New query' } });
  expect(inputField.value).toBe('New query');
});
