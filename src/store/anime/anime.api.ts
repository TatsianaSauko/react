import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ResponseAnimeId,
  ResponseAnime,
  TransformedResponse,
  Params,
  DataAnime,
} from '../../types/types';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.jikan.moe/v4/` }),
  endpoints: (build) => ({
    getAnime: build.query<TransformedResponse, Params>({
      query: ({ dataInput, limit, page }: Params) => {
        return {
          url: `anime`,
          params: {
            q: dataInput,
            limit: limit,
            page: page,
          },
        };
      },
      transformResponse: (response: ResponseAnime) => {
        return {
          data: response.data.map((item) => ({
            mal_id: item.mal_id,
            title: item.title,
            image: item.images.jpg.image_url,
          })),
          lastVisiblePage: response.pagination.last_visible_page,
        };
      },
    }),
    getAnimeId: build.query<DataAnime, string>({
      query: (id: string) => ({
        url: `anime/${id}`,
      }),
      transformResponse: (response: ResponseAnimeId) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetAnimeQuery, useGetAnimeIdQuery } = animeApi;
