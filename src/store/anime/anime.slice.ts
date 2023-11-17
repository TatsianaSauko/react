import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimeState, TransformedDataAnime } from '../../types/types';

export const initialState: AnimeState = {
  dataInput: '',
  limit: 5,
  page: 1,
  lastVisiblePage: 4001,
  dataApi: [],
  isLoadingList: false,
  isLoadingId: false,
};

export const AnimeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    changeDataInput(state, action: PayloadAction<string>) {
      state.dataInput = action.payload;
      state.isLoadingList = true;
    },
    changeLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.isLoadingList = true;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      state.isLoadingList = true;
    },
    changeLastVisiblePage(state, action: PayloadAction<number>) {
      state.lastVisiblePage = action.payload;
    },
    changeDataApi(state, action: PayloadAction<TransformedDataAnime[]>) {
      state.dataApi = action.payload;
    },
    changeLoadingList(state, action: PayloadAction<boolean>) {
      state.isLoadingList = action.payload;
    },
    changeLoadingId(state, action: PayloadAction<boolean>) {
      state.isLoadingId = action.payload;
    },
  },
});

export const animeAction = AnimeSlice.actions;
export const animeReducer = AnimeSlice.reducer;
