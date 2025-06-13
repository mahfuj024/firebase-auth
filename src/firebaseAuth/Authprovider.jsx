import React, { useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.init';


const Authprovider = ({ children }) => {

    const [productCart, setProductCart] = useState([])

    const handleAddToCart = (product) => {
        const newProduct = [...productCart, product]
        setProductCart(newProduct)
    }

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        handleAddToCart,
        productCart,
        SignUpUser
    }

    return (
        <Authcontext value={userInfo}>
            {children}
        </Authcontext>
    );
};

export default Authprovider;