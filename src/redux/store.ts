import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
