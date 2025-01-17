import { AppDispatch, RootState } from "../store";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "@/firebase/config";
import { setFavoriteArticles, setLoadedFavoriteArticles } from "./articleSlice";

export const uploadFavoriteArticles = ({ uri }: { uri: string }) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setFavoriteArticles(uri));

    const { uid } = getState().auth;
    const { favoriteArticles } = getState().articles;

    const docRef = doc(FirebaseDB, `${uid}`, "favoriteArticles");
    await setDoc(docRef, { favoriteArticles }, { merge: true });
  };
};

export const loadFavoriteArticles = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;

    try {
      const docRef = doc(FirebaseDB, `${uid}`, "favoriteArticles");
      const articles = await getDoc(docRef);
      const result = articles.data();

      dispatch(setLoadedFavoriteArticles(result?.favoriteArticles || []));
    } catch (error) {
      console.error("Error cargando favoritos:", error);
      dispatch(setLoadedFavoriteArticles([]));
    }
  };
};
