import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import {useLocation, Navigate} from "react-router-dom"

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation(auth)

    if (!user) {
      return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children
};

export default RequireAuth;