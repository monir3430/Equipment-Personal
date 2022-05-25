import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Shared/firebase.init';

import Spinner from '../Shared/Spinner';



const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        if(loading){
            return <Spinner></Spinner>
        }
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else{
        return children;
    }
};

export default RequiredAuth;