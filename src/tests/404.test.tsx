import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorPage from '../../pages/404';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe('ErrorPage', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText('Error 404')).toBeInTheDocument();
  });

  it('navigates back to home page when link is clicked', () => {
    const { getByText } = render(<ErrorPage />);
    fireEvent.click(getByText('go back'));

    expect(getByText('go back')).toHaveAttribute('href', '/');
  });
});
