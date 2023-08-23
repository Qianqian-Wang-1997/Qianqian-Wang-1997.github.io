import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user)
    //         setLoading(false)
    //     })

    //     return unsubscribe
    // }, [])

    async function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                throw errorMessage
            });
    }

    async function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const value = {
        currentUser,
        login,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
