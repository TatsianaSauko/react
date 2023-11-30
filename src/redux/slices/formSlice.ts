import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "../../types/types";

export const initialState: IState = {
  name: "",
  age: 1,
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  terms: false,
  image: "",
  country: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    saveFormAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    saveFormEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    saveFormPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    saveFormConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    saveFormGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    saveFormTerms: (state, action: PayloadAction<boolean>) => {
      state.terms = action.payload;
    },
    saveFormImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setFormCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const formAction = formSlice.actions;
export const formReducer = formSlice.reducer;
