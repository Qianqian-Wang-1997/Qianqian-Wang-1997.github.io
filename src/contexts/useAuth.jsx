import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('test')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
                setLoading(false)
            })
        }
        return unsubscribe
    }, [])

    async function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                throw error.message
            });
    }

    async function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                throw error.message;
            });
    }

    async function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email)
            .catch((error) => {
                throw error.message;
            });
    }

    async function signout() {
        console.log('signout click')
        return signOut(auth).then(() => {
        }).catch((error) => {
            throw error.message
        });
    }

    const value = {
        currentUser,
        login,
        signup,
        forgotPassword,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
