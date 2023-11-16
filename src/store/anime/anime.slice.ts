import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeState, DataAnime, DataAnimeId } from '../../types/types';

const initialState: AnimeState = {
  dataInput: '',
  limit: 5,
  page: 1,
  lastVisiblePage: 4001,
  dataApi: [],
  dataId: {
    title: '',
    title_english: '',
    title_synonyms: [],
    season: '',
    year: 0,
    source: '',
    images: {
      jpg: {
        image_url: '',
      },
    },
  },
};

export const AnimeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    changeDataInput(state, action: PayloadAction<string>) {
      state.dataInput = action.payload;
    },
    changeLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeLastVisiblePage(state, action: PayloadAction<number>) {
      state.lastVisiblePage = action.payload;
    },
    changeDataApi(state, action: PayloadAction<DataAnime[]>) {
      state.dataApi = action.payload;
    },
    changeDataId(state, action: PayloadAction<DataAnimeId>) {
      state.dataId = action.payload;
    },
  },
});

export const animeAction = AnimeSlice.actions;
export const animeReducer = AnimeSlice.reducer;
