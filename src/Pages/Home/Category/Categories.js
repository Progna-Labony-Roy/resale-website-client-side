import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Category from './Category';

const Categories = () => {
    const [categories , setCategories] =useState([]);
    useTitle('Category')
   

    useEffect( () =>{
       fetch('https://resale-web-server-eight.vercel.app/categories')
       .then(res=> res.json())
       .then(data=> setCategories(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
         
           {
                categories.map(category => <Category key={category._id} category={category}
                 ></Category>)
            }
        
        </div>
    );
};

export default Categories;