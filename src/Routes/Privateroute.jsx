import React, { use } from 'react';
import { Authcontext } from '../firebaseAuth/Authcontext';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({ children }) => {

    const user = use(Authcontext)
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children
};

export default Privateroute;