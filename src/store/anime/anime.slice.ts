import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeState, DataAnime } from '../../types/types';

const initialState: AnimeState = {
  dataInput: '',
  limit: 5,
  page: 1,
  lastVisiblePage: 4001,
  dataApi: [],
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
  },
});

export const animeAction = AnimeSlice.actions;
export const animeReducer = AnimeSlice.reducer;
