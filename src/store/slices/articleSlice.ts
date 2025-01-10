import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleInitialState {
  category: string;
  searchCategory: string;
}

const initialState: ArticleInitialState = {
  category: "",
  searchCategory: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearchCategory: (state, action: PayloadAction<string>) => {
      state.searchCategory = action.payload;
    },
  },
});
export const { setCategory, setSearchCategory } = articleSlice.actions;
