import { test, expect } from 'vitest';
import animeService from './animeService';

test('Test animeService', async () => {
  const [data, pagination] = await animeService('cowboy', 5, 1);
  expect(data.length).toBe(1);
  expect(pagination.last_visible_page).toBe(10);
  expect(pagination.items.total).toBe(10);
});
