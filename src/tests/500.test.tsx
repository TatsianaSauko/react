import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Custom500 from '../../pages/500';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe('Custom500', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Custom500 />);
    expect(getByText('500 - Server-side error occurred')).toBeInTheDocument();
  });

  it('navigates back to home page when link is clicked', () => {
    const { getByText } = render(<Custom500 />);
    fireEvent.click(getByText('go back'));

    expect(getByText('go back')).toHaveAttribute('href', '/');
  });
});
