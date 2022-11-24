import React, { useEffect, useState } from "react";
import "./SingleCategory.css";


const SingleCategory = ({ category }) => {
  const { image, name } = category;

  const [categoryItems,setCategotyItems] =useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCategotyItems(data))
     },[])
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="category-image" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="btn btn-sm btn-outline">Avaiable Books</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
