import React from 'react'
import { useAuthContext } from './LoginProvider'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
       const{isLoggedIn}  = useAuthContext();

    if(isLoggedIn){
        return children
    }
    return <Navigate to="/" replace/>
}

export default PrivateRoute