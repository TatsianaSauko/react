import { render, screen, fireEvent } from '@testing-library/react';
import ListData from '../components/ListData';
import { DataAnime } from '@/types/types';

test('renders ListData and handles item click', () => {
  const mockDataApi = [
    {
      mal_id: 1,
      title: 'Test Title',
      title_english: 'Test Title English',
      title_synonyms: ['Test Synonym 1', 'Test Synonym 2'],
      source: 'Test Source',
      images: {
        jpg: {
          image_url: '/test-image.jpg',
        },
      },
    },
  ];
  const mockHandleItemClick = jest.fn();

  const { getByText } = render(
    <ListData dataApi={mockDataApi} handleItemClick={mockHandleItemClick} />
  );

  fireEvent.click(getByText('Test Title'));

  expect(mockHandleItemClick).toHaveBeenCalledWith(mockDataApi[0]);
});

test('renders ListData with no items', () => {
  const mockDataApi: DataAnime[] = [];

  const mockHandleItemClick = jest.fn();

  const { getByText } = render(
    <ListData dataApi={mockDataApi} handleItemClick={mockHandleItemClick} />
  );

  expect(getByText('Nothing found')).toBeInTheDocument();
});

test('renders the correct number of cards', () => {
  const mockHandleItemClick = jest.fn();
  const mockDataApi = [
    {
      mal_id: 1,
      title: 'Test Title',
      title_english: 'Test Title English',
      title_synonyms: ['Test Synonym 1', 'Test Synonym 2'],
      source: 'Test Source',
      images: {
        jpg: {
          image_url: '/test-image.jpg',
        },
      },
    },
  ];

  render(
    <ListData dataApi={mockDataApi} handleItemClick={mockHandleItemClick} />
  );
  const cards = screen.getAllByRole('listitem');
  expect(cards).toHaveLength(mockDataApi.length);
});
