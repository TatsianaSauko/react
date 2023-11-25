import { render } from '@testing-library/react';
import { MainLayout } from '../components/MainLayout';
import Head from 'next/head';

jest.mock('next/head', () => {
  return jest.fn().mockImplementation();
});

describe('MainLayout', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<MainLayout>Test</MainLayout>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('renders title correctly', async () => {
    render(<MainLayout>Test</MainLayout>);
    expect(Head).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.arrayContaining([
          expect.objectContaining({
            type: 'title',
            props: { children: 'Anime' },
          }),
        ]),
      }),
      {}
    );
  });

  it('renders meta tags correctly', async () => {
    render(<MainLayout>Test</MainLayout>);
    expect(Head).toHaveBeenCalledWith(
      expect.objectContaining({
        children: expect.arrayContaining([
          expect.objectContaining({
            type: 'meta',
            props: {
              name: 'keywords',
              content: 'next,javascript,nextjs,react,typescript',
            },
          }),
          expect.objectContaining({
            type: 'meta',
            props: {
              name: 'description',
              content: 'this application using https://api.jikan.moe/v4/anime',
            },
          }),
          expect.objectContaining({
            type: 'meta',
            props: { charSet: 'utf-8' },
          }),
        ]),
      }),
      {}
    );
  });
});
