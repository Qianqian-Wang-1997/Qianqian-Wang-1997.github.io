import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
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
                const errorMessage = error.message;
                throw errorMessage
            });
    }

    async function signout() {
        console.log('signout click')
        return signOut(auth).then(() => {
            // Sign-out successful.
            console.log('sign out successful')
        }).catch((error) => {
            // An error happened.
            console.log('failed to sign out')
        });
    }

    const value = {
        currentUser,
        login,
        signup,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
