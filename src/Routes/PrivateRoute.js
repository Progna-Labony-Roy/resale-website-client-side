import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user ,loading } =useContext(AuthContext);
    const location =useLocation()


    if(loading){
        return <>
        <div className='flex justify-center items-center h-full'>
      <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white'></div>
    </div>
        </>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{ from :location}}></Navigate>
};

export default PrivateRoute;