import { http, HttpResponse } from 'msw';
import { mockData } from './mockData';

export const handlers = [
  http.get(`https://api.jikan.moe/v4/anime`, ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('q');
    if (search && search === 'error') {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(mockData);
  }),
  http.get(`https://api.jikan.moe/v4/anime/:id`, ({ params }) => {
    if (
      !params.id ||
      Number.isNaN(Number(params.id)) ||
      Number(params.id) === 0
    ) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(mockData.data[0]);
  }),
];
