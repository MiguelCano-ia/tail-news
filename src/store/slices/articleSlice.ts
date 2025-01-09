import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleInitialState {
  category: string;
}

const initialState: ArticleInitialState = {
  category: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});
export const { setCategory } = articleSlice.actions;
