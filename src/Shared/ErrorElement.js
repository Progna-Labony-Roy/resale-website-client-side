import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import errorImage from '../Images/errorImage.jpg';
import './ErrorElement.css'

const ErrorElement = () => {
    const error =useRouteError();
    const { logOut } =useContext(AuthContext);
    const navigate=useNavigate();
    
    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate('/login')
          })
          .catch((err) => console.log(err));
      };

    return (
        <div className='text-center justify-center'>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-500'>{error.statusText || error.messeng}</p>
            <img className='error-image mx-auto' src={errorImage} alt="error" />
            <Link onClick={handleLogOut} className="btn btn-error btn-sm">SignOut</Link>
        </div>
    );
};

export default ErrorElement;