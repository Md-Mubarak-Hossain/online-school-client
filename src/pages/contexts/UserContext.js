import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
    });
    const [loading, setLoading] = useState(true);
    /*.............................
    create user signup form
    ..............................*/
    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name);

    }
    /*.............................
        create user login sign in form
        ..............................*/
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    /*.............................
         Goolge sign in form
    ...........................*/
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    /*.............................
             Github sign in form
     ...........................*/
    const gitHubProvider = new GithubAuthProvider();
    const gitSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)

    }

    /*.............................
           create user log out form
           ..............................*/
    const logOut = () => {
        return signOut(auth);
    }
    /*.............................
               unsubscribe
    ..............................*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    const authInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle, gitSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;