import { initialState, User } from "./auth.interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCheckingAuth: (state) => {
      state.status = "checking";
    },
    setSignInUser: (state, action: PayloadAction<User>) => {
      state.status = "authenticated";
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.errorMessage = null;
    },
    setSignOutUser: (
      state,
      action: PayloadAction<{ errorMessage: string | null }>
    ) => {
      state.status = "no-authenticated";
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = action.payload.errorMessage || null;
      state.provider = "";
    },
    setProvider: (state, action: PayloadAction<string>) => {
      state.provider = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});
export const {
  setCheckingAuth,
  setSignInUser,
  setSignOutUser,
  setProvider,
  clearErrorMessage,
} = authSlice.actions;
