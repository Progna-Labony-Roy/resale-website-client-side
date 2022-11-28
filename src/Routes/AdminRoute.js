import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user ,loading } =useContext(AuthContext);
    const [isAdmin ,isAdminLoading] = useAdmin(user?.email);
   
    const location =useLocation()


    if(loading || isAdminLoading){
        return <>
        <div className='flex justify-center items-center h-full'>
      <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white'></div>
    </div>
        </>
    }

    
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{ from :location}}></Navigate>
};

export default AdminRoute;