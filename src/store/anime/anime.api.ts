import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ResponseAnimeId,
  DataAnime,
  ResponseAnime,
  TransformedResponse,
  Params,
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
    getAnimeId: build.query<DataAnime, string>({
      query: (id: string) => ({
        url: `anime/${id}`,
      }),
      transformResponse: (response: ResponseAnimeId) => response.data,
    }),
  }),
});

export const { useGetAnimeQuery, useGetAnimeIdQuery } = animeApi;
