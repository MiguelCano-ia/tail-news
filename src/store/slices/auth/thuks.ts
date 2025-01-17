import {
  signInWithGoogle,
  signInWithPasswordAndEmail,
  signOutFirebase,
  signUpWithEmailAndPassword,
} from "@/firebase/provider";
import { AppDispatch } from "@/store/store";
import { setCheckingAuth, setSignInUser, setSignOutUser } from "./authSlice";
import { setEmptyFavoriteArticles } from "../articleSlice";

export const startSignInWithGoogle = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setCheckingAuth());

    const result = await signInWithGoogle();

    if (!result.ok)
      dispatch(
        setSignOutUser({
          errorMessage: result.errorMessage || "Failed to sign in with google",
        })
      );

    dispatch(setSignInUser(result));
  };
};

export const starSignUpWithEmailAndPassword = ({
  displayName,
  email,
  password,
  photoURL,
}: {
  displayName: string;
  email: string;
  password: string;
  photoURL: string | null;
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setCheckingAuth());

    const result = await signUpWithEmailAndPassword({
      displayName,
      email,
      password,
      photoURL,
    });

    if (!result.ok)
      dispatch(
        setSignOutUser({
          errorMessage: result.errorMessage || "Failed to sign up",
        })
      );

    console.log(result);
    dispatch(setSignInUser(result));
  };
};

export const startSignInWIthEmailAndPassword = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setCheckingAuth());

    const result = await signInWithPasswordAndEmail({ email, password });

    if (!result.ok)
      dispatch(
        setSignOutUser({
          errorMessage: result.errorMessage || "Failed to sign in",
        })
      );

    dispatch(setSignInUser(result));
  };
};

export const startSignOut = () => {
  return async (dispatch: AppDispatch) => {
    await signOutFirebase();
    dispatch(setSignOutUser({ errorMessage: null }));
    dispatch(setEmptyFavoriteArticles());
  };
};
