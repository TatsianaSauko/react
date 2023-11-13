import { expect, it, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AnimeError from './AnimeError';
import { IError } from '../../types/types';

vi.mock('react-router-dom', () => ({
  useRouteError: () => ({ message: 'Test error message' }) as IError,
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('AnimeError Component', () => {
  it('renders correctly', () => {
    render(<AnimeError />);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
    expect(screen.getByText('Back to the homepage')).toBeInTheDocument();
  });
});
