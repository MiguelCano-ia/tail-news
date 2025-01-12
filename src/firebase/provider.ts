import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const {
      user: { displayName, email, photoURL },
    } = await signInWithPopup(FirebaseAuth, googleProvider);
    return { ok: true, displayName, email, photoURL };
  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
};

export const signUpWithEmailAndPassword = async ({ email, password }) => {
  try {
    const data = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log(data);
  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
};

export const signInWithPasswordAndEmail = async ({ email, password }) => {
  try {
    const data = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log(data);
  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
};
