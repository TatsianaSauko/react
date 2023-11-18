import { expect, it, describe, vi } from 'vitest';
import { screen } from '@testing-library/react';
import ListData from './ListData';
import { renderWithProviders } from '../../utils/test-utils';
import { mockData } from '../../mocks/mockData';
import userEvent from '@testing-library/user-event';
import * as reduxHooks from '../../hooks/redux';

describe('ListData component', () => {
  it('ListData render', () => {
    renderWithProviders(<ListData />);
    expect(screen.getByRole('list')).toBeDefined;
  });
  it('the component displays the specified number of cards', async () => {
    const mockUseAppSelector = vi.spyOn(reduxHooks, 'useAppSelector');
    mockUseAppSelector.mockReturnValue({ dataApi: mockData.data });
    renderWithProviders(<ListData />);
    const cards = await screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockData.data.length);
  });

  it('the card component renders the relevant card data', async () => {
    const { findByText } = renderWithProviders(<ListData />);
    expect(await findByText('Cowboy Bebop')).toBeInTheDocument();
    expect(
      await findByText('Cowboy Bebop: Tengoku no Tobira')
    ).toBeInTheDocument();
    expect(await findByText('Trigun')).toBeInTheDocument();
    expect(await findByText('Witch Hunter Robin')).toBeInTheDocument();
    expect(await findByText('Witch Hunter Robin')).toBeInTheDocument();
    expect(await findByText('Bouken Ou Beet')).toBeInTheDocument();
  });
  it('clicking on a card opens a detailed card component', async () => {
    renderWithProviders(<ListData />);
    const user = userEvent.setup();
    const links = screen.getAllByRole('link', { name: /Cowboy Bebop/i });
    const link = links[0];
    expect(link).toBeInTheDocument();
    await user.click(link);
    vi.waitFor(() => {
      expect(screen.getByTestId('detail')).toBeInTheDocument();
    });
  });

  it('renders "Nothing found" message if no cards are present', async () => {
    const mockUseAppSelector = vi.spyOn(reduxHooks, 'useAppSelector');
    mockUseAppSelector.mockReturnValue({ dataApi: [] });
    renderWithProviders(<ListData />);
    const message = screen.getByText(/Nothing found/i);
    expect(message).toBeInTheDocument();
  });
});
