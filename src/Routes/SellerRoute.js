import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useSeller from '../Hooks/useSeller';
import Loader from '../Shared/Loader';

const AdminRoute = ({children}) => {
    const { user ,loading } =useContext(AuthContext);
    const [isVarified ,isSellerLoading] = useSeller(user?.email);
   
    const location =useLocation()


    if(loading || isSellerLoading){
        return <Loader></Loader>
    }

    
    if(user && isVarified){
        return children;
    }
    return <Navigate to='/login' state={{ from :location}}></Navigate>
};

export default AdminRoute;