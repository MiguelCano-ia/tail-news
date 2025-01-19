import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleInitialState {
  category: string;
  searchCategory: string;
  favoriteArticles: string[];
  isOpen: boolean;
}

const initialState: ArticleInitialState = {
  category: "",
  searchCategory: "dmoz/Home",
  favoriteArticles: [],
  isOpen: false,
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
    setFavoriteArticles: (state, action: PayloadAction<string>) => {
      if (state.favoriteArticles.includes(action.payload)) {
        state.favoriteArticles = state.favoriteArticles.filter(
          (article) => article !== action.payload
        );
      } else {
        state.favoriteArticles.push(action.payload);
      }
    },
    setLoadedFavoriteArticles: (state, action: PayloadAction<string[]>) => {
      state.favoriteArticles = action.payload;
    },
    setEmptyFavoriteArticles: (state) => {
      state.favoriteArticles = [];
    },
    setEditProfile: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});
export const {
  setCategory,
  setSearchCategory,
  setFavoriteArticles,
  setLoadedFavoriteArticles,
  setEmptyFavoriteArticles,
  setEditProfile,
} = articleSlice.actions;
