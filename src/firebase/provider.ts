import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const {
      user: { uid, displayName, email, photoURL },
    } = await signInWithPopup(FirebaseAuth, googleProvider);
    return { ok: true, uid, displayName, email, photoURL };
  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
};

export const signUpWithEmailAndPassword = async ({
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
  try {
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    if (FirebaseAuth.currentUser)
      await updateProfile(FirebaseAuth.currentUser, { displayName, photoURL });

    return { ok: true, uid, displayName, email, photoURL };
  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
};

export const signInWithPasswordAndEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const {
      user: { uid, displayName, photoURL },
    } = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    return { ok: true, uid, displayName, email, photoURL };
  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
};

export const signOutFirebase = async () => {
  return FirebaseAuth.signOut();
};
