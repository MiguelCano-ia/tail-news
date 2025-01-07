import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "../api";

interface ArticleInitialState {
  category: string;
  latestNews: Result | null;
  results: Result[];
}

const initialState: ArticleInitialState = {
  category: "",
  latestNews: null,
  results: [],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setNews: (state, action: PayloadAction<Result[]>) => {
      state.latestNews = action.payload[0];
      state.results = action.payload.slice(1, 7);
    },
  },
});
export const { setCategory, setNews } = articleSlice.actions;
