import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { testReducer: () => ({ test: true }) },
});
