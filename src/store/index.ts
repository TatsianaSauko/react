import { configureStore } from '@reduxjs/toolkit';
import { animeApi } from './anime/anime.api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { animeReducer } from './anime/anime.slice';

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
    anime: animeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
