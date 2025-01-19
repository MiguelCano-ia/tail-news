import { FirebaseAuth } from "@/firebase/config";
import {
  setProvider,
  setSignInUser,
  setSignOutUser,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { loadFavoriteArticles } from "@/store/slices/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useCheckingAuth = () => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(setSignOutUser({ errorMessage: null }));

      const { uid, displayName, email, photoURL, providerData } = user;

      dispatch(setSignInUser({ uid, displayName, email, photoURL }));
      dispatch(setProvider(providerData[0].providerId.split(".")[0]));
      dispatch(loadFavoriteArticles());
    });
  }, []);

  return {
    status,
  };
};
