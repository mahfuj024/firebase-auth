import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.init';


const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [productCart, setProductCart] = useState([])

    const handleAddToCart = (product) => {
        const newProduct = [...productCart, product]
        setProductCart(newProduct)
    }

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUserWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        signOut(auth, () => {
            setUser(null)
        })
    }

    useEffect(() => {
        const unScribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unScribe()
        }
    }, [])

    const userInfo = {
        handleAddToCart,
        productCart,
        SignUpUser,
        loginUserWithEmailPassword,
        user,
        signOutUser
    }

    return (
        <Authcontext value={userInfo}>
            {children}
        </Authcontext>
    );
};

export default Authprovider;