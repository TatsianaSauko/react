import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ResponseAnimeId,
  ResponseAnime,
  TransformedResponse,
  Params,
  DataAnimeId,
} from '../../types/types';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.jikan.moe/v4/` }),
  endpoints: (build) => ({
    getAnime: build.query<TransformedResponse, Params>({
      query: ({ dataInput, limit, page }: Params) => ({
        url: `anime`,
        params: {
          q: dataInput,
          limit: limit,
          page: page,
        },
      }),

      transformResponse: (response: ResponseAnime) => ({
        data: response.data,
        lastVisiblePage: response.pagination.last_visible_page,
      }),
    }),
    getAnimeId: build.query<DataAnimeId, string>({
      query: (id: string) => ({
        url: `anime/${id}`,
      }),
      transformResponse: (response: ResponseAnimeId) => ({
        title: response.data.title,
        title_english: response.data.title_english || '',
        title_synonyms: response.data.title_synonyms || [],
        season: response.data.season || '',
        year: response.data.year || 0,
        source: response.data.source || '',
        images: {
          jpg: {
            image_url: response.data.images.jpg.image_url || '',
          },
        },
      }),
    }),
  }),
});

export const { useGetAnimeQuery, useGetAnimeIdQuery } = animeApi;
