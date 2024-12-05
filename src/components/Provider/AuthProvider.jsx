import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { fetchURL } from '../../../fetchURL';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);






    const handleSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

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
        setUserInfo (null);
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


    useEffect(() => {

        if (!loading) {
            fetch(`${fetchURL}/users/${user?.email}`)
                .then(res => res.json())
                .then(data => setUserInfo(data))
                .catch(error => console.log('Invalid API call no user found'));
        }



    }, [loading])


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