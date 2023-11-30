import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "../../types/types";

export const initialState: IState = {
  name: [],
  age: [],
  email: [],
  password: [],
  confirmPassword: [],
  gender: [],
  terms: [],
  image: [],
  country: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormName: (state, action: PayloadAction<string>) => {
      state.name.unshift(action.payload);
    },
    saveFormAge: (state, action: PayloadAction<number>) => {
      state.age.unshift(action.payload);
    },
    saveFormEmail: (state, action: PayloadAction<string>) => {
      state.email.unshift(action.payload);
    },
    saveFormPassword: (state, action: PayloadAction<string>) => {
      state.password.unshift(action.payload);
    },
    saveFormConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword.unshift(action.payload);
    },
    saveFormGender: (state, action: PayloadAction<string>) => {
      state.gender.unshift(action.payload);
    },
    saveFormTerms: (state, action: PayloadAction<boolean>) => {
      state.terms.unshift(action.payload);
    },
    saveFormImage: (state, action: PayloadAction<string>) => {
      state.image.unshift(action.payload);
    },
    setFormCountry: (state, action: PayloadAction<string>) => {
      state.country.unshift(action.payload);
    },
  },
});

export const formAction = formSlice.actions;
export const formReducer = formSlice.reducer;
