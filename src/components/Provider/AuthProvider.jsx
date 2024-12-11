import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { fetchURL } from '../../../fetchURL';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // Normal Function 
    function convertMinutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hours).padStart(2, '0')} : ${String(mins).padStart(2, '0')}`;
    }



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);






    const handleSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);


    }

    const updateUserProfile = (userInfo) => {
        return updateProfile (auth.currentUser, userInfo)
    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const handleLoginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const handleLogout = () => {
        setUserInfo(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        })


        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {

        user,
        setUser,
        userInfo,
        loading,
        setLoading,
        handleSignUp,
        handleLogin,
        handleLoginWithGoogle,
        handleLogout,
        convertMinutesToTime,
        updateUserProfile

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;