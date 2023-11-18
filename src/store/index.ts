import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { animeApi } from './anime/anime.api';
import { animeReducer } from './anime/anime.slice';

const rootReducer = combineReducers({
  anime: animeReducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      [animeApi.reducerPath]: animeApi.reducer,
      anime: animeReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(animeApi.middleware),
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
