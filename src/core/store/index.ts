import { configureStore, PreloadedState } from "@reduxjs/toolkit";

import exampleSlice from "@slices/example";

const store = configureStore({
  reducer: {
    example: exampleSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      example: exampleSlice,
    },
    preloadedState,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof setupStore>;
export type RootDispatch = typeof store.dispatch;

export default store;
