import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListData from './ListData';
import { SearchContext } from '../../pages/MainPage';
import { BrowserRouter } from 'react-router-dom';

// describe('ListData component', () => {
// 	test('ListData render', () => {
// 		render(<ListData />);
// 		expect(screen.getByRole('list')).toBeDefined;

// 	  });

// 	// test('renders correct number of cards', async () => {
// 	// 	const dataApi = [
// 	// 	  { mal_id: 1, title: 'Title 1', images: { jpg: { image_url: 'url1' } } },
// 	// 	  { mal_id: 2, title: 'Title 2', images: { jpg: { image_url: 'url2' } } },
// 	// 	  { mal_id: 3, title: 'Title 3', images: { jpg: { image_url: 'url3' } } },
// 	// 	];
// 	// 		// const items = await screen.findAllByAltText('name')
// 	// 		// expect(items).toHaveLength(3)
// 	// 		const { container } = render(<ListData />);
// 	// 		const cards = container.querySelectorAll('.card');
// 	// 		console.log(cards)
// 	// 		expect(cards.length).toBe(dataApi.length);
// 	//   });
// 	test('renders correct number of cards', () => {
// 		const dataApi = [
// 		  { mal_id: 1, title: 'Title 1', images: { jpg: { image_url: 'url1' } } },
// 		  { mal_id: 2, title: 'Title 2', images: { jpg: { image_url: 'url2' } } },
// 		  { mal_id: 3, title: 'Title 3', images: { jpg: { image_url: 'url3' } } },
// 		];
// 		render(<ListData dataApi={dataApi} />);
// 		const cards = screen.getAllByRole('listitem');
// 		expect(cards).toHaveLength(dataApi.length);
// 	  });

//   test('renders "Nothing found" message if no cards are present', () => {
// 	const { getByText } = render(<ListData />);
// 	const message = getByText(/nothing found/i);
// 	expect(message).toBeInTheDocument();
//   });
// })

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
