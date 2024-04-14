import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [catchUp, setCatchUp] = useState(null);
  const [loading, setLoading] = useState(true)

  //register create account
  const createSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in account
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current value of the current user", currentUser);
      setCatchUp(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // google account
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github account
  const gitHubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // github account
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const authInfo = { createSignUp, userLogIn, googleSignIn, catchUp , logOut, loading, gitHubSignIn, facebookSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
