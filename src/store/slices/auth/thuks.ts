import { signInWithGoogle } from "@/firebase/provider";
import { AppDispatch } from "@/store/store";
import { setSignInUser, setSignOutUser } from "./authSlice";

export const startSignInWithGoogle = () => {
  return async (dispatch: AppDispatch) => {
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
