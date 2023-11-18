import { expect, it, describe, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import Details from './Details';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import { mockData } from '../../mocks/mockData';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  if (typeof actual === 'object' && actual !== null) {
    return {
      ...actual,
      useNavigate: () => vi.fn(),
      useParams: () => ({ id: '1' }),
      useOutletContext: () => vi.fn(),
    };
  }
});

vi.mock('../../store/anime/anime.api', async () => {
  const actual = await vi.importActual('../../store/anime/anime.api');
  if (typeof actual === 'object' && actual !== null) {
    return {
      ...actual,
      useGetAnimeIdQuery: () => ({
        data: mockData.data[0],
        isError: false,
        isFetching: false,
      }),
    };
  }
});

describe('Details Component', () => {
  it('the detailed card component correctly displays the detailed card data', async () => {
    renderWithProviders(<Details />);
    expect(
      screen.getByText('Anime Details for Cowboy Bebop')
    ).toBeInTheDocument();
    expect(screen.getByText('Title_english: Cowboy Bebop')).toBeInTheDocument();
    expect(screen.getByText('Season: spring')).toBeInTheDocument();
    expect(screen.getByText('Year: 1998')).toBeInTheDocument();
    expect(screen.getByText('Source: Original')).toBeInTheDocument();
  });
  it('clicking the close button hides the component', () => {
    renderWithProviders(<Details />);
    expect(
      screen.getByText('Anime Details for Cowboy Bebop')
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));
    vi.waitFor(() => {
      expect(
        screen.queryByText('Anime Details for Cowboy Bebop')
      ).not.toBeInTheDocument();
    });
  });
});
