import React from "react";
import { Link } from "react-router-dom";
import "./SingleCategory.css";


const Category = ({ category ,setBookName }) => {
  const { _id, image, name } = category;

  
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
           <Link to={`/category/${_id}`}> <div  className="btn btn-sm btn-outline">Avaiable Books</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
