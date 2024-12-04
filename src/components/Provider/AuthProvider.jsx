import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

   
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    

    


    const handleSignUp = (email, password) => {
        setLoading (true);
        return createUserWithEmailAndPassword (auth, email, password);

    }
    
    
    const authInfo = {

        user, 
        setUser, 
        loading, 
        setLoading,
        handleSignUp,

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