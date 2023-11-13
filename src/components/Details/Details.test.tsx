import { expect, it, describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Details from './Details';
import { IAnime } from '../../types/types';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

const mockAnime: IAnime = {
  title: 'Test Anime',
  title_english: 'Test Anime English',
  title_synonyms: ['Test Synonym 1', 'Test Synonym 2'],
  season: 'Spring',
  year: 2023,
  source: 'Manga',
  images: {
    jpg: {
      image_url: 'https://test.com/test.jpg',
    },
  },
};

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  if (typeof actual === 'object' && actual !== null) {
    return {
      ...actual,
      useNavigate: () => vi.fn(),
      useParams: () => ({ id: '1' }),
      useLoaderData: () => mockAnime,
      useOutletContext: () => vi.fn(() => {}),
    };
  }
});

describe('Details Component', () => {
  it('the detailed card component correctly displays the detailed card data', () => {
    render(<Details />);
    expect(
      screen.getByText('Anime Details for Test Anime')
    ).toBeInTheDocument();
    expect(screen.getByText('Number: 1')).toBeInTheDocument();
    expect(
      screen.getByText('Title_english: Test Anime English')
    ).toBeInTheDocument();
    expect(screen.getByText('0: Test Synonym 1')).toBeInTheDocument();
    expect(screen.getByText('1: Test Synonym 2')).toBeInTheDocument();
    expect(screen.getByText('Season: Spring')).toBeInTheDocument();
    expect(screen.getByText('Year: 2023')).toBeInTheDocument();
    expect(screen.getByText('Source: Manga')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://test.com/test.jpg'
    );
  });

  it('clicking the close button hides the component', () => {
    render(
      <MemoryRouter initialEntries={['/some-route']}>
        <Details />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Anime Details for Test Anime')
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    setTimeout(() => {
      expect(
        screen.queryByText('Anime Details for Test Anime')
      ).not.toBeInTheDocument();
    }, 0);
  });
});
