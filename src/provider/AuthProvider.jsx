import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        return signOut(auth)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentState) => {
            setUser(currentState);
            setLoading(false)
        }) 
        return () => {
            unSubscribe()
        }
    },[])

    const UserInfo = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser
    }
    return (
        <AuthContext value={UserInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;