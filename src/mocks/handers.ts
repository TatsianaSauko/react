import { http, HttpResponse } from 'msw';
import { mockData } from './mockData';

export const handlers = [
  http.get(`https://api.jikan.moe/v4/anime`, () => {
    return HttpResponse.json(mockData);
  }),
  http.get(`https://api.jikan.moe/v4/anime/1`, () => {
    return HttpResponse.json(mockData.data[0]);
  }),
];
