import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();
    if (currentUser, loading){
        return children
    }
    if(loading){
        return <div>loading...</div>
    }
  return (
    <Navigate to="/Login" replace/>
  )
}

export default PrivateRoute