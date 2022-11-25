import React, { useEffect, useState } from 'react';
import SingleCategory from './Category';

const Category = () => {
    const [categories , setCategories] =useState([]);

    useEffect( () =>{
       fetch('http://localhost:5000/categories')
       .then(res=> res.json())
       .then(data=> setCategories(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
         
           {
                categories.map(category => <SingleCategory key={category.id} category={category}></SingleCategory>)
            }
        
        </div>
    );
};

export default Category;