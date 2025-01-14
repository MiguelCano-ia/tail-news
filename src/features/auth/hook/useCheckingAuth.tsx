import { FirebaseAuth } from "@/firebase/config";
import {
  setSignInUser,
  setSignOutUser,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useCheckingAuth = () => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(setSignOutUser({ errorMessage: null }));

      const { uid, displayName, email, photoURL } = user;

      dispatch(setSignInUser({ uid, displayName, email, photoURL }));
    });
  }, []);

  return {
    status,
  };
};
