import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import MainPage from './MainPage';
import { renderWithProviders } from '../../utils/test-utils';
import { animeReducer, initialState } from '../../store/anime/anime.slice';

describe('MainPage', () => {
  it('should render without crashing', async () => {
    renderWithProviders(<MainPage />);
    expect(screen.getByText(/Anime/i)).toBeInTheDocument();
  });

  test('should return the initial state', () => {
    expect(animeReducer(undefined, { type: undefined })).toEqual(initialState);
  });
});
