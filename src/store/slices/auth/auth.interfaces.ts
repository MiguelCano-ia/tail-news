export interface AuthState {
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  errorMessage?: string | null;
}

export const initialState: AuthState = {
  displayName: null,
  email: null,
  photoURL: null,
  errorMessage: null,
};
