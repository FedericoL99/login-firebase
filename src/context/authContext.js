import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no AuthProvider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, user.email)
  }

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });

    return () => unsuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{ singup, login, user, logout, loading, loginWithGoogle, resetPassword }}
    >
      {children}
    </authContext.Provider>
  );
}
