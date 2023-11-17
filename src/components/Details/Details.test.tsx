import { expect, it, describe, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import Details from './Details';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';

// vi.mock('react-router-dom', async () => {
//   const actual = await vi.importActual('react-router-dom');
//   if (typeof actual === 'object' && actual !== null) {
//     return {
//       ...actual,
//       useNavigate: () => vi.fn(),
//       useParams: () => ({ id: '1' }),
//       useOutletContext: () => vi.fn(() => {}),
//       useHistory: () => ({
//         push: vi.fn(),
//       }),
//     };
//   }
// });

describe('Details Component', () => {
  it('the loading indicator is displayed while data is being received', async () => {
    renderWithProviders(<Details />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
  it('the detailed card component correctly displays the detailed card data', async () => {
    renderWithProviders(<Details />);
    vi.waitFor(() => {
      expect(screen.getByText('Cowboy Bebop')).toBeInTheDocument();
      expect(
        screen.getByText('Title_english: Cowboy Bebop')
      ).toBeInTheDocument();

      expect(screen.getByText('Season: spring')).toBeInTheDocument();
      expect(screen.getByText('Year: 1998')).toBeInTheDocument();
      expect(screen.getByText('Source: Original')).toBeInTheDocument();
    });
  });
  it('clicking the close button hides the component', () => {
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
    renderWithProviders(<Details />);
    vi.waitFor(() => {
      expect(
        screen.getByText('Anime Details for Test Anime')
      ).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: /Close/i }));
      vi.waitFor(() => {
        expect(
          screen.queryByText('Anime Details for Test Anime')
        ).not.toBeInTheDocument();
      });
    });
  });
});
