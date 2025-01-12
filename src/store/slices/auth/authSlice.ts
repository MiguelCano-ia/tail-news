import { AuthState, initialState } from "./auth.interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignInUser: (state, action: PayloadAction<AuthState>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.errorMessage = null;
    },
    setSignOutUser: (
      state,
      action: PayloadAction<{ errorMessage: string | null }>
    ) => {
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = action.payload.errorMessage || null;
    },
  },
});
export const { setSignInUser, setSignOutUser } = authSlice.actions;
