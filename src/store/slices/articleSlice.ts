import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "../api/interfaces";

interface ArticleInitialState {
  result: Result[];
  category: string;
}

const initialState: ArticleInitialState = {
  result: [],
  category: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setResults: (state, action) => {},
  },
});
export const { setCategory, setResults } = articleSlice.actions;
