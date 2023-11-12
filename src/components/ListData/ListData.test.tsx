import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListData from './ListData';
import { SearchContext } from '../../pages/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';

describe('ListData component', () => {
  it('ListData render', () => {
    render(<ListData />);
    expect(screen.getByRole('list')).toBeDefined;
  });
  it('renders correct number of cards', async () => {
    const mockData = [
      { mal_id: 1, title: 'Title 1', images: { jpg: { image_url: 'url1' } } },
      { mal_id: 2, title: 'Title 2', images: { jpg: { image_url: 'url2' } } },
    ];
    const mockSetDataInput = vi.fn();
    render(
      <BrowserRouter>
        <SearchContext.Provider
          value={{
            dataInput: '',
            setDataInput: mockSetDataInput,
            dataApi: mockData,
          }}
        >
          <ListData />
        </SearchContext.Provider>
      </BrowserRouter>
    );

    const cards = await screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockData.length);
  });

  it('renders "Nothing found" message if no cards are present', () => {
    render(
      <SearchContext.Provider
        value={{ dataInput: '', setDataInput: vi.fn(), dataApi: [] }}
      >
        <ListData />
      </SearchContext.Provider>
    );

    const message = screen.getByText(/Nothing found/i);
    expect(message).toBeInTheDocument();
  });
});

// import { test } from 'vitest'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { createMemoryHistory } from 'history'
// import { Router } from 'react-router-dom'
// import Details, { animeDetailsLoader } from '../../components/Details/Details'
// import { SearchContext } from '../../pages/MainPage/MainPage'

// test('card component displays the correct card data', async () => {
//   const mockData = [
//     { mal_id: 1, title: 'Title 1', images: { jpg: { image_url: 'url1' } } },
//   ];
//   const mockSetDataInput = vi.fn();
//   const history = createMemoryHistory()
//   history.push('/1')
//   render(
//     <Router history={history}>
//       <SearchContext.Provider
//         value={{
//           dataInput: '',
//           setDataInput: mockSetDataInput,
//           dataApi: mockData,
//         }}
//       >
//         <Details />
//       </SearchContext.Provider>
//     </Router>
//   );

//   const cardTitle = await screen.getByText('Title 1');
//   expect(cardTitle).toBeInTheDocument();
// });

// test('clicking on close button navigates back', async () => {
//   const mockData = [
//     { mal_id: 1, title: 'Title 1', images: { jpg: { image_url: 'url1' } } },
//   ];
//   const mockSetDataInput = vi.fn();
//   const history = createMemoryHistory()
//   history.push('/1')
//   render(
//     <Router history={history}>
//       <SearchContext.Provider
//         value={{
//           dataInput: '',
//           setDataInput: mockSetDataInput,
//           dataApi: mockData,
//         }}
//       >
//         <Details />
//       </SearchContext.Provider>
//     </Router>
//   );

//   const closeButton = await screen.getByText('Close');
//   fireEvent.click(closeButton)

//   expect(history.location.pathname).toBe('/')
// });
