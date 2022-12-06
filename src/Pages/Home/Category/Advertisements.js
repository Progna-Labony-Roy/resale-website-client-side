import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Advertisement from './Advertisement';

const Advertisements = () => {
    const {user}=useContext(AuthContext);
    const avaiableBooks= useLoaderData();
    return (
       <div>
         <h3 className="text-2xl m1-10 flex justify-center">Advertisement</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'> {
       user?.email && avaiableBooks?.length && avaiableBooks.map(avaiableBook => <Advertisement key={avaiableBook._id} avaiableBook={avaiableBook}></Advertisement>)
      } </div>
       </div>
    );
};

export default Advertisements;