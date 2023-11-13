import { test, vi } from 'vitest';
import animeService from './animeService';

test('fetches data from the API', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: [], pagination: {} }),
      headers: new Headers(),
      redirected: false,
      status: 200,
      statusText: 'OK',
      type: 'default',
      url: '',
      clone: vi.fn(),
      arrayBuffer: vi.fn(),
      blob: vi.fn(),
      formData: vi.fn(),
      text: vi.fn(),
      body: null,
      bodyUsed: false,
    })
  );

  const [data, pagination] = await animeService('test', 1, 5);

  expect(fetch).toHaveBeenCalledWith(
    'https://api.jikan.moe/v4/anime?q=test&limit=5&page=1'
  );

  expect(data).toEqual([]);
  expect(pagination).toEqual({});
});
