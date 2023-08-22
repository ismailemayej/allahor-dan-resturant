import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  //   new user
  const newUser = (email, passwoud) => {
    return createUserWithEmailAndPassword(Auth, email, passwoud);
  };
  //   LogIn
  const LogIn = (email, passwoud) => {
    return signInWithEmailAndPassword(Auth, email, passwoud);
  };
  //   LogOut
  const LogOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubcriber = onAuthStateChanged(Auth, (CurrentUser) => {
      setUser(CurrentUser);
      console.log("current user", CurrentUser);
      setLoding(false);
    });
    return () => {
      return unSubcriber();
    };
  }, []);
  // update user profite
  const UpdateProfile = (name, photo) => {
    return updateProfile(auth.CurrentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const AuthInfo = { user, newUser, LogIn, LogOut, UpdateProfile };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
