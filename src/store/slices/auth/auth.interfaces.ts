export interface User {
  uid?: string | null;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
}

export type Status = "no-authenticated" | "checking" | "authenticated";

export interface AuthState extends User {
  status: Status;
  errorMessage?: string | null;
  provider: string;
}

export const initialState: AuthState = {
  status: "no-authenticated",
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  errorMessage: null,
  provider: "",
};
