import { render, screen } from '@testing-library/react';
import Details from '../components/Details';

test('renders Details component', () => {
  const mockClosePage = jest.fn();
  const mockSelectedItem = {
    title: 'Test Title',
    mal_id: 1,
    title_english: 'Test Title English',
    title_synonyms: ['Test Synonym 1', 'Test Synonym 2'],
    season: 'Test Season',
    year: 'Test Year',
    source: 'Test Source',
    images: {
      jpg: {
        image_url: 'https://example.com/test-image.jpg',
      },
    },
  };
  render(<Details selectedItem={mockSelectedItem} closePage={mockClosePage} />);

  expect(screen.getByText('Anime Details for Test Title')).toBeInTheDocument();
  expect(screen.getByText('Number: 1')).toBeInTheDocument();
  expect(
    screen.getByText('Title_english: Test Title English')
  ).toBeInTheDocument();
  expect(screen.getByText('0: Test Synonym 1')).toBeInTheDocument();
  expect(screen.getByText('1: Test Synonym 2')).toBeInTheDocument();
  expect(screen.getByText('Season: Test Season')).toBeInTheDocument();
  expect(screen.getByText('Year: Test Year')).toBeInTheDocument();
  expect(screen.getByText('Source: Test Source')).toBeInTheDocument();
});

test('calls closePage when Close button is clicked', () => {
  const mockClosePage = jest.fn();

  const mockSelectedItem = {
    title: 'Test Title',
    mal_id: 1,
    title_english: 'Test Title English',
    title_synonyms: ['Test Synonym 1', 'Test Synonym 2'],
    season: 'Test Season',
    year: 'Test Year',
    source: 'Test Source',
    images: {
      jpg: {
        image_url: 'https://example.com/test-image.jpg',
      },
    },
  };
  render(<Details selectedItem={mockSelectedItem} closePage={mockClosePage} />);

  screen.getByText('Close').click();

  expect(mockClosePage).toHaveBeenCalled();
});
