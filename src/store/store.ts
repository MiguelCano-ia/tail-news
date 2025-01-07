import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./api/newsApi";
import { articleSlice } from "./slices/articleSlice";

export const store = configureStore({
  reducer: {
    articles: articleSlice.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
